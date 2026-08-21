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

            // Número telefónico de WhatsApp (reemplazar por el número real con código de país)
            const numeroTelefono = '528100000000';

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