const images = document.querySelectorAll('.image-frame img');

let currentIndex = 0;

function rotateImages() {
  images[currentIndex].classList.remove('active');
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

setInterval(rotateImages, 3000);
