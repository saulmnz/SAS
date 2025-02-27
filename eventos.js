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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 200; /* Reducido la altura del canvas de partículas */

const particles = [];

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 20; i++) { /* Reducido la cantidad de partículas */
        let size = Math.random() * 3 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, size, speedX, speedY));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

const waveCanvas = document.getElementById("waveCanvas");
const waveCtx = waveCanvas.getContext("2d");

waveCanvas.width = window.innerWidth;
waveCanvas.height = 40;  /* Reducido la altura de las olas a 40px */

let waveOffset = 0;

function drawWave() {
    waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
    waveCtx.beginPath();
    for (let i = 0; i < waveCanvas.width; i++) {
        const y = Math.sin((i + waveOffset) * 0.02) * 4 + 20; /* Olas más pequeñas */
        waveCtx.lineTo(i, y);
    }
    waveCtx.strokeStyle = "rgba(255, 255, 255, 0.7)";
    waveCtx.stroke();
    waveOffset += 1;
    requestAnimationFrame(drawWave);
}

drawWave();







