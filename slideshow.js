document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll('.slideshow');
  
    slideshows.forEach(slideshow => {
      const imagePaths = slideshow.dataset.images.split(',');
      const display = slideshow.querySelector('.slideshow-display');
      let index = 0;
  
      const updateImage = () => {
        display.src = imagePaths[index];
      };
  
      const next = () => {
        index = (index + 1) % imagePaths.length;
        updateImage();
      };
  
      const prev = () => {
        index = (index - 1 + imagePaths.length) % imagePaths.length;
        updateImage();
      };
  
      slideshow.querySelector('.next').addEventListener('click', (e) => {
        e.stopPropagation();
        next();
      });
      
      slideshow.querySelector('.prev').addEventListener('click', (e) => {
        e.stopPropagation();
        prev();
      });
      
      // Load the first image initially
      updateImage();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  const lightbox = document.getElementById("slideshow-lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-display");
  const lightboxNext = lightbox.querySelector(".next");
  const lightboxPrev = lightbox.querySelector(".prev");

  let currentImages = [];
  let currentIndex = 0;

  slideshows.forEach(slideshow => {
    const imagePaths = slideshow.dataset.images.split(",");
    const display = slideshow.querySelector(".slideshow-display");
    let index = 0;

    const updateImage = () => {
      display.src = imagePaths[index];
    };

    const next = () => {
      index = (index + 1) % imagePaths.length;
      updateImage();
    };

    const prev = () => {
      index = (index - 1 + imagePaths.length) % imagePaths.length;
      updateImage();
    };

    slideshow.querySelector(".next").addEventListener("click", e => {
      e.stopPropagation();
      next();
    });

    slideshow.querySelector(".prev").addEventListener("click", e => {
      e.stopPropagation();
      prev();
    });

    // 🔥 CLICK TO OPEN LIGHTBOX
    slideshow.addEventListener("click", () => {
      currentImages = imagePaths;
      currentIndex = index;
      openLightbox();
    });

    updateImage();
  });

  function openLightbox() {
    lightbox.classList.remove("hidden");
    updateLightboxImage();
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
  }

  function updateLightboxImage() {
    lightboxImg.src = currentImages[currentIndex];
  }

  lightboxNext.addEventListener("click", e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
  });

  lightboxPrev.addEventListener("click", e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  });

  // Close when clicking background
  lightbox.addEventListener("click", closeLightbox);

  // Close with ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
  });
});

  