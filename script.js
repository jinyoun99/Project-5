document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality can go here
    console.log('Website loaded!');

    // Example: Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // We'll add more advanced JS for animations, sticky nav, etc. in later phases.
});
