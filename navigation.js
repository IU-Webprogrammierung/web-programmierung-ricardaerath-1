document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const close = document.getElementById("close");
    const mobileNav = document.getElementById("mobile-nav");
  
    burger.addEventListener("click", () => {
      mobileNav.classList.remove("hidden");
    });
  
    close.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  });
  