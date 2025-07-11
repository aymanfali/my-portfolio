document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("back-to-top");
  const nav = document.querySelector(".nav-list");
  const toggleNav = document.querySelector(".nav-trigger");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".nav-list a");

  const mainNavToggle = document.querySelector(".main-nav-toggle");

  const themeToggle = document.getElementById("theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Check for saved theme preference or use system preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.checked = true;
  }

  // Toggle theme when switch is clicked
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  });

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
