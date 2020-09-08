// Grabbing DOM classes
const carouselSlide = document.querySelector('.album-slide');
const carouselImages = document.querySelectorAll('.album-cover');

// Buttons
const prevBtn = document.getElementById('left-arrow');
const nextBtn = document.getElementById('right-arrow');

console.log(carouselImages);

let counter = 1;
const imageWidth = carouselImages[0].clientWidth;

console.log(imageWidth);

carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;

// Button listeners
nextBtn.addEventListener('mouseup', function(e) {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = `transform 0.25s ease-in`;
  // carouselImages[counter].classList.add('album-out');
  counter++;
  // carouselImages[counter].classList.add('album-in');
  carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
  setTimeout(function() {
    carouselImages[counter - 1].classList.remove('album-out');
  }, 500)
})

prevBtn.addEventListener('mouseup', function(e) {
  if (counter <= 0) return;
  carouselSlide.style.transition = `transform 0.25s ease-in`;
  counter--;
  carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
  
})

carouselSlide.addEventListener('transitionend', function() {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
})