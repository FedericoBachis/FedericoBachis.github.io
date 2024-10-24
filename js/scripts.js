document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.project img');

    images.forEach(img => {
        img.onerror = function() {
            this.classList.add('error');
            this.src = ''; // Rimuovi il percorso dell'immagine
        };
    });
});
