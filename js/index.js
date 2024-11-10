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
