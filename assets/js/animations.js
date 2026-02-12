// Shared Animation Utilities

// Counter Animation - Counts up from 0 to target value
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        // Format number with commas if it's an integer
        const displayValue = Number.isInteger(target)
            ? Math.floor(current).toLocaleString()
            : current.toFixed(1);

        element.textContent = displayValue + suffix;
    }, 16);
}

// Initialize all counters on page
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-counter'));
        const suffix = counter.getAttribute('data-suffix') || '';

        // Use Intersection Observer to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target, 2000, suffix);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Stagger animation for multiple elements
function staggerAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

// Smooth scroll reveal animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Progress ring animation
function animateProgressRing(ringElement, percentage) {
    const circle = ringElement.querySelector('circle:last-child');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }, 100);
}

// Loading spinner
function showLoading(container) {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = `
    <svg class="animate-spin" width="48" height="48" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p class="mt-4 text-gray-400">Analyzing...</p>
  `;
    container.appendChild(spinner);
    return spinner;
}

function hideLoading(spinner) {
    if (spinner && spinner.parentNode) {
        spinner.remove();
    }
}

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initCounters();
    initScrollAnimations();
});
