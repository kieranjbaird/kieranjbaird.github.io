const carousel = document.getElementById('carousel');
let timer;

function advanceCarousel() {
  carousel.appendChild(carousel.firstElementChild);
}

function startCarousel() {
  timer = setInterval(advanceCarousel, 5000);
}

function stopCarousel() {
  clearInterval(timer);
}

// Start autoplay
startCarousel();

// // Pause on hover
// carousel.addEventListener('mouseenter', stopCarousel);
// carousel.addEventListener('mouseleave', startCarousel);

// Advance on click
carousel.addEventListener('click', () => {
  stopCarousel();
  advanceCarousel();
  startCarousel();
});
