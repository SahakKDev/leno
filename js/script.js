document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".nav__mobile-menu-items");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
