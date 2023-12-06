const NAVBAR = document.querySelector(".navbar");
const RESPONSIVE_BURGER_BUTTON = document.querySelector(".burger-button");

function toggleNavbarVisibility() {
  NAVBAR.classList.toggle("active");
}+

RESPONSIVE_BURGER_BUTTON.addEventListener("click", toggleNavbarVisibility);
