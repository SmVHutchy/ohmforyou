// Intersection Observer für Fade-In Effekte
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });

    // Progress Bar Animation
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const updateProgress = () => {
            const currentWidth = progressBar.style.width;
            if (currentWidth !== '70%') {
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = '70%';
                }, 300);
            }
        };
        updateProgress();
    }

    // Smooth Scroll für Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Parallax Effekt für Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        const scroll = window.pageYOffset;
        header.style.transform = `translateY(${scroll * 0.4}px)`;
    }
});