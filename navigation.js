document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const currentPage = window.location.pathname.split("/").pop();
    const allLinks = document.querySelectorAll(".nav-link");
  
    // Toggle mobile menu + icon
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      toggle.innerText = navLinks.classList.contains("hidden") ? "☰" : "×";
    });
  
    // Highlight current page
    allLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("text-purple-500", "underline");
      }
    });
  });
  