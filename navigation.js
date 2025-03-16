document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const bars = document.querySelector(".bars");
    const close = document.querySelector(".close");
    const navLinks = document.getElementById("nav-links");

    close.style.display = "none";

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            bars.style.display = "none";
            close.style.display = "inline";
        } else {
            bars.style.display = "inline";
            close.style.display = "none";
        }
    });
});
