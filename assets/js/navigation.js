// Navigation and Sidebar Logic

document.addEventListener('DOMContentLoaded', function () {
    highlightActivePage();
    setupSidebarToggle();
    setupNotifications();
});

// Highlight active page in sidebar
function highlightActivePage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'dashboard.html';

    // Remove active class from all menu items
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current page
    const activeLink = document.querySelector(`.sidebar-menu a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Setup sidebar toggle for mobile
function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                sidebar.classList.add('collapsed');
            }
        }
    });
}

// Setup notifications
function setupNotifications() {
    const notifBtn = document.getElementById('notification-btn');
    const notifPanel = document.getElementById('notification-panel');

    if (notifBtn && notifPanel) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifPanel.classList.toggle('hidden');
        });

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!notifPanel.contains(e.target) && !notifBtn.contains(e.target)) {
                notifPanel.classList.add('hidden');
            }
        });
    }
}

// Update page title dynamically
function updatePageTitle(title) {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.textContent = title;
    }
}
