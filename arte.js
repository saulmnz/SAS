// Filtrado obras por categoría
const filterButtons = document.querySelectorAll('.filtros .btn');
const galleryItems = document.querySelectorAll('.obra-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Activar botón filtro
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrar obras
        galleryItems.forEach(item => {
            if (filter === 'todos' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

//  Lightbox
const obraItems = document.querySelectorAll('.obra-imagen');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('#expandedImg');
const closeBtn = document.querySelector('.close');
const imgText = document.querySelector('#imgtext');

obraItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
        imgText.textContent = item.alt;  // Título lightbox
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Carrusel 
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
    carouselImages[currentIndex].style.transform = 'scale(1)';
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].style.transform = 'scale(1.1)';
}

setInterval(showNextImage, 3000); // Cambio automático cada 3 segundos

//  Smooth Scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
