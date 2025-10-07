// Menú hamburguesa para móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Botón CTA en hero
const ctaBtn = document.getElementById('cta-btn');
ctaBtn.addEventListener('click', () => {
    alert('¡Gracias por tu interés! Redirigiendo al formulario de inscripción...');
    // Aquí podrías agregar lógica para redirigir o mostrar un modal.
});

// Smooth scroll para enlaces de nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});