document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     FOOTER YEAR
  ========================================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }


  /* =========================================
     MOBILE MENU
  ========================================= */

  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (menuBtn && mainNav) {

      menuBtn.addEventListener("click", function () {

          const isOpen =
              mainNav.classList.toggle("open");

          menuBtn.setAttribute(
              "aria-expanded",
              isOpen ? "true" : "false"
          );

          menuBtn.innerHTML =
              isOpen ? "✕" : "☰";

      });


      /* Close menu when clicking a link */

      mainNav.querySelectorAll("a").forEach(function (link) {

          link.addEventListener("click", function () {

              mainNav.classList.remove("open");

              menuBtn.setAttribute(
                  "aria-expanded",
                  "false"
              );

              menuBtn.innerHTML = "☰";

          });

      });

  }

});
