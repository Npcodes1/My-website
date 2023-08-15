const hamburger = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = Array.from(navLinks.querySelectorAll("a"));

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});