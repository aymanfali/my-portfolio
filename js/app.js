const scrollToTopBtn = document.getElementById("back-to-top");

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
