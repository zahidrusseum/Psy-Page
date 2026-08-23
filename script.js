document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MANEJO DEL FORMULARIO DE CONTACTO A WHATSAPP
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Capturar datos del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Número telefónico de WhatsApp
            const numeroTelefono = '528123308504'; // 

            // Estructurar el mensaje para WhatsApp
            const textoWhatsApp = `Hola Lic. Nelly Sánchez, mi nombre es *${nombre}*.\n\n` +
                                 `*Correo:* ${correo}\n` +
                                 `*Motivo de consulta:* ${mensaje}`;

            // Codificar el texto para la URL de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoWhatsApp)}`;

            // Abrir en nueva pestaña
            window.open(urlWhatsApp, '_blank');
        });
    }

    // 2. DESPLAZAMIENTO SUAVE PARA NAVEGACIÓN DE ENLACES (#)
    const linksNav = document.querySelectorAll('a[href^="#"]');

    linksNav.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
function cambiarTab(evt, tabId) {
    // Ocultar todo el contenido de las pestañas
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));

    // Quitar la clase 'active' de todos los botones
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Mostrar la pestaña seleccionada y activar su botón
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}
// Fade-in al hacer scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(' .contact-container,.specialty-block, .faq-item').forEach(el => {
    fadeObserver.observe(el);
});
// Contador animado del badge de experiencia
const expNumber = document.querySelector('.exp-number');

if (expNumber) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let count = 0;
                const target = 20;
                const interval = setInterval(() => {
                    count++;
                    expNumber.textContent = '+' + count;
                    if (count >= target) {
                        clearInterval(interval);
                    }
                }, 60);
                counterObserver.unobserve(expNumber);
            }
        });
    }, { threshold: 0.5 });

    counterObserver.observe(expNumber);
}