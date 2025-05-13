  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}vw)`;
    // 100% gambar + 2% buat nutup gap antar gambar
  }

  nextButton.addEventListener('click', () => {
    index++;
    if (index >= track.children.length) {
      index = 0;
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = track.children.length - 1;
    }
    updateCarousel();
  });

  // AUTO-SLIDE
  setInterval(() => {
    index++;
    if (index >= track.children.length) {
      index = 0;
    }
    updateCarousel();
  }, 5000);



  



