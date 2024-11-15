document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".accordion-icon");

    // Check if the clicked accordion content is already open
    if (content.style.display === "block") {
      // If open, close it
      content.style.display = "none";
      icon.textContent = "▶";
    } else {
      // If closed, close all other contents and open the clicked one
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.display = "none";
      });

      // Reset all icons to the closed state
      document.querySelectorAll(".accordion-icon").forEach((icon) => {
        icon.textContent = "▶";
      });

      // Open the clicked accordion content
      content.style.display = "block";
      icon.textContent = "▼";
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // Toggle the active class on nav
  hamburger.classList.toggle("open"); // Toggle the open class on hamburger
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Default number of slides in view
  spaceBetween: 20,
  loop: true, // Enables infinite looping
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const GalerySwiper = new Swiper('.swiper-gallery', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: -150, // Controls overlap
  loop: true,
  effect: 'slide',
  breakpoints: {
      // when window width is >= 1024px
      1024: {
          slidesPerView: 3,
          spaceBetween: -100,
      },
      // when window width is >= 768px
      768: {
          slidesPerView: 2,
          spaceBetween: -80,
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: -50,
      }
  }
});
 // Same JavaScript code as before, no changes needed for the positioning update
 const ImageShowcase = {
  config: {
    autoplayInterval: 2000,
    transitionDuration: 500,
  },

  state: {
    currentIndex: 0,
    autoplayTimer: null,
  },

  elements: {
    showcase: null,
    imageCards: [],
  },

  init(showcaseSelector) {
    this.elements.showcase = document.querySelector(showcaseSelector);
    this.elements.imageCards = [...this.elements.showcase.querySelectorAll('.image-card')];
    
    this.updateImagePositions();
    this.startAutoplay();
  },

  updateImagePositions() {
    const totalImages = this.elements.imageCards.length;

    this.elements.imageCards.forEach((card, index) => {
      card.className = 'image-card';
      
      let relativePosition = index - this.state.currentIndex;
      
      if (relativePosition < -2) relativePosition += totalImages;
      if (relativePosition > 2) relativePosition -= totalImages;
      
      const positionClass = this.getPositionClass(relativePosition);
      if (positionClass) card.classList.add(positionClass);
    });
  },

  getPositionClass(position) {
    const positionClasses = {
      '-2': 'image-card--previous-far',
      '-1': 'image-card--previous-near',
      '0': 'image-card--current',
      '1': 'image-card--next-near',
      '2': 'image-card--next-far'
    };
    return positionClasses[position];
  },

  moveToNext() {
    const totalImages = this.elements.imageCards.length;
    this.state.currentIndex = (this.state.currentIndex + 1) % totalImages;
    this.updateImagePositions();
  },

  startAutoplay() {
    if (this.state.autoplayTimer) clearInterval(this.state.autoplayTimer);
    
    this.state.autoplayTimer = setInterval(() => {
      this.moveToNext();
    }, this.config.autoplayInterval);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ImageShowcase.init('.image-showcase');
});