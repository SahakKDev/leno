document.addEventListener("DOMContentLoaded", () => {
  //  Mobile Menu
  const toggleBtn = document.querySelector(".nav__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".nav__mobile-menu-items");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Video Modal
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoButton = document.querySelector(".preview__video-button");
  const videoCloseButton = document.querySelector(".modal__close-button");

  const closeModal = () => {
    modal.style.display = "none";
    videoPlayer.src = "";
  };

  videoButton.addEventListener("click", () => {
    modal.style.display = "block";

    videoPlayer.src = "https://www.youtube.com/embed/Y7zcQmmFhgg";
  });

  videoCloseButton.addEventListener("click", closeModal);
  modal.addEventListener("click", closeModal);
});

// Navigation Background On Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");

  if (window.scrollY > 0) {
    navbar.classList.add("nav--scroll");
  } else {
    navbar.classList.remove("nav--scroll");
  }
});
