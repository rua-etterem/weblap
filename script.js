document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    // Oldalsáv menü nyitás/zárás
    function toggleMenu() {
        hamburgerBtn.classList.toggle("open");
        sidebar.classList.toggle("open");
    }

    hamburgerBtn.addEventListener("click", toggleMenu);

    // Oldalváltások kezelése (Étlap / Itallap / Rólunk)
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            pages.forEach(page => page.classList.remove("active"));

            const targetId = this.getAttribute("data-target");
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add("active");
            }

            // Mobilnézetben becsukjuk a menüt váltás után
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });

    // DINAMIKUS KÉP MEGTEKINTÉSE FUNKCIÓ (Event Delegation)
    const mainContent = document.querySelector(".main-content");
    
    mainContent.addEventListener("click", (e) => {
        // Megkeressük, hogy a kattintás a gombon vagy annak belsejében történt-e
        const toggleBtn = e.target.closest(".item-image-toggle");
        
        if (toggleBtn) {
            // Megkeressük a legközelebbi menü kártyát (.menu-item)
            const menuItem = toggleBtn.closest(".menu-item");
            
            if (menuItem) {
                // Átkapcsoljuk az 'img-open' osztályt a kártyán
                menuItem.classList.toggle("img-open");
            }
        }
    });
});