document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.getElementById('contenido');
    const scrollDown = document.querySelector('.scroll-down');

    scrollDown.addEventListener('click', (e) => {
        e.preventDefault();
        contenido.style.display = 'block';
        setTimeout(() => {
            contenido.style.opacity = '1';
        }, 100);
    });
});
