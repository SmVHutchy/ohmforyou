document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.1 // Der Wert bestimmt, wann das Element als „sichtbar“ angesehen wird (10% des Elements müssen sichtbar sein)
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Beendet die Beobachtung des Elements nach dem ersten Sichtbarwerden
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});
