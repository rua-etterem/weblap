document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    // Hamburger menü nyitása/zárása
    function toggleMenu() {
        hamburgerBtn.classList.toggle("open");
        sidebar.classList.toggle("open");
    }

    // Gomb kattintás
    hamburgerBtn.addEventListener("click", toggleMenu);

    // Menüpontra kattintás (Oldal váltás)
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Megakadályozza, hogy felugorjon a lap tetejére
            
            // 1. Gomb aktív státuszának cseréje
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // 2. Oldalak elrejtése
            pages.forEach(page => page.classList.remove("active"));

            // 3. A kiválasztott oldal megjelenítése a 'data-target' alapján
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");

            // 4. Mobilon becsukjuk a menüt kattintás után automatikusan
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });
});