document.addEventListener("DOMContentLoaded", function () {
    console.log("Script geladen!");

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) {
        console.error("Elemente nicht gefunden!");
        return;
    }

    console.log("Hamburger gefunden:", hamburger);
    console.log("Nav-Links gefunden:", navLinks);

    hamburger.addEventListener("click", function () {
        console.log("Hamburger wurde geklickt!");

        navLinks.classList.toggle("show");
        hamburger.classList.toggle("open"); // Umschalten zwischen Hamburger und X

        if (navLinks.classList.contains("show")) {
            console.log("✅ Menü wurde erfolgreich geöffnet!");
        } else {
            console.log("❌ Menü wurde geschlossen!");
        }
    });

    // Menü schließen, wenn ein Link geklickt wird
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            console.log("Menü schließt sich beim Klick auf einen Link.");
            navLinks.classList.remove("show");
            hamburger.classList.remove("open"); // X zurück zum Hamburger machen
        });
    });
});
