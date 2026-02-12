// Analytics Page - Charts & Counters

document.addEventListener('DOMContentLoaded', function () {
    // Initialize counter animations
    setTimeout(() => {
        initCounters();
    }, 300);

    // Initialize charts
    initCharts();
});

function initCharts() {
    // Detection Trends Chart
    const trendsCtx = document.getElementById('trends-chart');
    if (trendsCtx) {
        new Chart(trendsCtx, {
            type: 'line',
            data: detectionTrendsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#a0aec0'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#a0aec0'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#a0aec0'
                        }
                    }
                }
            }
        });
    }

    // Detection Types Chart
    const typesCtx = document.getElementById('types-chart');
    if (typesCtx) {
        new Chart(typesCtx, {
            type: 'doughnut',
            data: detectionTypesData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#a0aec0',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // Hourly Patterns Chart
    const patternsCtx = document.getElementById('patterns-chart');
    if (patternsCtx) {
        new Chart(patternsCtx, {
            type: 'bar',
            data: hourlyPatternsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#a0aec0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#a0aec0'
                        }
                    }
                }
            }
        });
    }
}
