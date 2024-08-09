document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".nav__mobile-menu-items");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");

  if (window.scrollY > 0) {
    navbar.classList.add("nav--scroll");
  } else {
    navbar.classList.remove("nav--scroll");
  }
});
