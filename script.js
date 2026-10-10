const menuButton = document.querySelector(".menu-button");
const navRight = document.querySelector(".nav-right");
const themeButton = document.querySelector(".theme-button");
const navLinks = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", function () {
    navRight.classList.toggle("show");

    const isOpen = navRight.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeButton.textContent = "☾";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navRight.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    });
});