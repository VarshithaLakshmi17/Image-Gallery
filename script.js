const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});