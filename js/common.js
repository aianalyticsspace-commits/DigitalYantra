const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    // Close menu after clicking a navigation link

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
        });

    });

}


// Footer year

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}