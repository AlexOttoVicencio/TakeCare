const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const images = document.querySelectorAll('#image-container img');
    let currentIndex = 0;

    function showImage(index) {
      images[currentIndex].classList.remove('active');
      images[index].classList.add('active');
      currentIndex = index;
      adjustButtonPosition();
    }

    function adjustButtonPosition() {
      const activeImage = document.querySelector('#image-container img.active');
      const buttonContainer = document.querySelector('.button-container');
      buttonContainer.style.top = `${activeImage.offsetTop + activeImage.offsetHeight / 2}px`;
    }

    prevButton.addEventListener('click', () => {
      let index = currentIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
    });

    nextButton.addEventListener('click', () => {
      let index = currentIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      showImage(index);
    });

    adjustButtonPosition();
  

    var zoom = function(event) {
      var img = event.target;
      var x = event.offsetX;
      var y = event.offsetY;
      var width = img.offsetWidth;
      var height = img.offsetHeight;
      var scale = 1.5;

      img.style.transform = 'scale(' + scale + ')';
      img.style.transformOrigin = (x / width * 100) + '% ' + (y / height * 100) + '%';
    };

    var unzoom = function(event) {
      var img = event.target;

      img.style.transform = 'scale(1)';
      img.style.transformOrigin = '50% 50%';
    };

    var imgs = document.querySelectorAll('.zoom img');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('mousemove', zoom);
      imgs[i].addEventListener('mouseout', unzoom);
    }
