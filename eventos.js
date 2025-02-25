const filterEventButtons = document.querySelectorAll('.btn-evento');
const eventItems = document.querySelectorAll('.evento-item');

filterEventButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        filterEventButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        eventItems.forEach(item => {
            if(filter === 'todos' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


const carousel = document.querySelector('.carousel-eventos');
let scrollAmount = 0;

function autoScroll() {
    const itemWidth = document.querySelector('.evento-destacado').offsetWidth;
    scrollAmount += itemWidth + 20;
    
    if(scrollAmount > carousel.scrollWidth - carousel.offsetWidth) {
        scrollAmount = 0;
    }
    
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(autoScroll, 5000);

document.querySelectorAll('.evento-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.evento-imagen').style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseout', () => {
        item.querySelector('.evento-imagen').style.transform = 'scale(1)';
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});