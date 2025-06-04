// Intersection Observer und Scroll-Effekte
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, options);
    elements.forEach(el => observer.observe(el));

    // Fortschrittsbalken Animation
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const updateProgress = () => {
            progressBar.style.width = '0%';
            setTimeout(() => { progressBar.style.width = '70%'; }, 300);
        };
        updateProgress();
    }

    // Dark mode toggle
    const darkToggle = document.getElementById('dark-toggle');
    if (darkToggle) {
        const applyMode = () => {
            document.body.classList.toggle('dark', localStorage.getItem('darkMode') === 'true');
        };
        applyMode();
        darkToggle.addEventListener('click', () => {
            const enabled = document.body.classList.toggle('dark');
            localStorage.setItem('darkMode', enabled);
        });
    }

    // Header logo wave animation
    const headerLogo = document.querySelector('header img');
    if (headerLogo) {
        headerLogo.classList.add('wave');
    }

    // Workshop sign-up form
    const form = document.getElementById('signup-form');
    if (form) {
        const success = document.getElementById('signup-success');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (success) {
                success.style.display = 'block';
                setTimeout(() => { success.style.display = 'none'; }, 3000);
            }
            form.reset();
        });
    }

    // Scroll-to-Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Scroll-Effekte für Header und Navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const scrollTopBtn = document.querySelector('.scroll-top');
    const scroll = window.pageYOffset;

    if (header) {
        header.style.transform = `translateY(${scroll * 0.4}px)`;
    }
    if (nav) {
        nav.classList.toggle('scrolled', scroll > 50);
    }
    if (scrollTopBtn) {
        if (scroll > 200) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
});
