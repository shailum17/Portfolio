// Smooth scrolling to the contact section
document.querySelector('.scroll-down').addEventListener('click', function(event) {
    event.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});