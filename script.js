function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const humburgerIcon = document.querySelector(".humburger-icon");

  menuLinks.classList.toggle("open");
  humburgerIcon.classList.toggle("open");
}
