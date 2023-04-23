const prevButton = $('#prev-button');
const nextButton = $('#next-button');
const images = $('#image-container img');
let currentIndex = 0;

function showImage(index) {
  images.eq(currentIndex).removeClass('active');
  images.eq(index).addClass('active');
  currentIndex = index;
  adjustButtonPosition();
}

function adjustButtonPosition() {
  const activeImage = $('#image-container img.active');
  const buttonContainer = $('.button-container');
  buttonContainer.css('top', `${activeImage.offset().top + activeImage.height() / 2}px`);
}

prevButton.on('click', () => {
  let index = currentIndex - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage(index);
});

nextButton.on('click', () => {
  let index = currentIndex + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
});
