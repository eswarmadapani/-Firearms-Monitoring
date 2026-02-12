// Settings Page - Toggle & Preferences Logic

document.addEventListener('DOMContentLoaded', function () {
    loadSettings();
    setupToggleListeners();
    setupSliderListeners();
});

// Load saved settings from localStorage
function loadSettings() {
    const settings = {
        darkMode: localStorage.getItem('darkMode') !== 'false', // Default true
        emailNotifs: localStorage.getItem('emailNotifs') !== 'false',
        soundAlerts: localStorage.getItem('soundAlerts') !== 'false',
        desktopNotifs: localStorage.getItem('desktopNotifs') === 'true',
        sensitivity: localStorage.getItem('sensitivity') || '75',
        threshold: localStorage.getItem('threshold') || '80'
    };

    // Apply settings to UI
    document.getElementById('dark-mode-toggle').checked = settings.darkMode;
    document.getElementById('email-notifs-toggle').checked = settings.emailNotifs;
    document.getElementById('sound-alerts-toggle').checked = settings.soundAlerts;
    document.getElementById('desktop-notifs-toggle').checked = settings.desktopNotifs;
    document.getElementById('sensitivity-slider').value = settings.sensitivity;
    document.getElementById('threshold-slider').value = settings.threshold;

    // Update slider value displays
    document.getElementById('sensitivity-value').textContent = settings.sensitivity + '%';
    document.getElementById('threshold-value').textContent = settings.threshold + '%';

    // Apply dark mode (already default in our CSS, but for demonstration)
    if (!settings.darkMode) {
        document.body.classList.add('light-mode'); // Would need to implement light mode CSS
    }
}

// Setup toggle listeners
function setupToggleListeners() {
    document.getElementById('dark-mode-toggle').addEventListener('change', (e) => {
        localStorage.setItem('darkMode', e.target.checked);
        if (e.target.checked) {
            document.body.classList.remove('light-mode');
            showToast('Dark mode enabled');
        } else {
            document.body.classList.add('light-mode');
            showToast('Light mode enabled (would be implemented in full version)');
        }
    });

    document.getElementById('email-notifs-toggle').addEventListener('change', (e) => {
        localStorage.setItem('emailNotifs', e.target.checked);
        showToast(e.target.checked ? 'Email notifications enabled' : 'Email notifications disabled');
    });

    document.getElementById('sound-alerts-toggle').addEventListener('change', (e) => {
        localStorage.setItem('soundAlerts', e.target.checked);
        showToast(e.target.checked ? 'Sound alerts enabled' : 'Sound alerts disabled');
    });

    document.getElementById('desktop-notifs-toggle').addEventListener('change', (e) => {
        localStorage.setItem('desktopNotifs', e.target.checked);
        showToast(e.target.checked ? 'Desktop notifications enabled' : 'Desktop notifications disabled');
    });
}

// Setup slider listeners
function setupSliderListeners() {
    const sensitivitySlider = document.getElementById('sensitivity-slider');
    const thresholdSlider = document.getElementById('threshold-slider');

    sensitivitySlider.addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('sensitivity-value').textContent = value + '%';
        localStorage.setItem('sensitivity', value);
    });

    thresholdSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('threshold-value').textContent = value + '%';
        localStorage.setItem('threshold', value);
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 glass-strong px-6 py-3 rounded-lg border border-cyan-500 text-white animate-fade-in z-50';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Reset settings
function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
        localStorage.clear();
        location.reload();
    }
}
