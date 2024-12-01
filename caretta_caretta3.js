const topbar = document.getElementById('topbar');

// Afegim un event listener per l'scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) { // Si es fa scroll més de 50px
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});
