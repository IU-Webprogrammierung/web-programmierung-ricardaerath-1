document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const allLinks = document.querySelectorAll(".nav-link");

  toggle.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      toggle.innerText = navLinks.classList.contains("hidden") ? "☰" : "×";
  });

  function highlightCurrentPage() {
      const currentPage = window.location.pathname.split("/").pop();
      allLinks.forEach(link => {
          // Entfernt vorherige Markierungen
          link.classList.remove("text-purple-500", "underline");

          // Markiert den Link für die aktuelle Seite
          if (link.getAttribute("href") === currentPage) {
              link.classList.add("text-purple-500", "underline");
          }
      });
  }

  highlightCurrentPage();

  allLinks.forEach(link => {
      link.addEventListener("click", () => {
          highlightCurrentPage();
      });
  });
});
