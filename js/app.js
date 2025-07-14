document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("back-to-top");
  const nav = document.querySelector(".nav-list");
  const toggleNav = document.querySelector(".nav-trigger");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".nav-list a");

  const mainNavToggle = document.querySelector(".main-nav-toggle");

  mainNavToggle.addEventListener("click", function () {
    if (this.classList.contains("active-menu")) {
      this.classList.remove("active-menu");
    } else {
      this.classList.add("active-menu");
    }
  });

  toggleNav.addEventListener("click", function () {
    nav.classList.toggle("show-nav");
    overlay.classList.toggle("show-overlay");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav?.classList.remove("show-nav");
      overlay?.classList.remove("show-overlay");
      mainNavToggle.classList.remove("active-menu");
    });
  });

  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
