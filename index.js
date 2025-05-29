const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileNav = document.getElementById("mobile-nav");

if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
}
