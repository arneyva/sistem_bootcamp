const hamburgerIcon = document.querySelector(".hamburger-icon");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
});
