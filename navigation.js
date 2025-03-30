document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const bars = document.querySelector(".bars");
    const close = document.querySelector(".close");
    const navLinks = document.getElementById("nav-links");
  
    navLinks.classList.add("hidden");
    close.classList.add("hidden");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
  
      const isMenuOpen = !navLinks.classList.contains("hidden");
      bars.classList.toggle("hidden", isMenuOpen);
      close.classList.toggle("hidden", !isMenuOpen);
    });
  });
  