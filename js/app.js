document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("back-to-top");

  const nav = document.querySelector(".nav-list");
  const toggleNav = document.querySelector(".nav-trigger");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".nav-list a");
  const mainNavToggle = document.querySelector(".main-nav-toggle");

  const nameErrorMessage = document.querySelector(".name-error");
  const emailErrorMessage = document.querySelector(".email-error");
  const subjectErrorMessage = document.querySelector(".subject-error");
  const messageErrorMessage = document.querySelector(".message-error");

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");
  const submit = document.querySelector(".submit");

  let nameError = "";
  let emailError = "";
  let subjectError = "";
  let messageError = "";

  mainNavToggle.addEventListener("click", () => {
    if (mainNavToggle.classList.contains("active-menu")) {
      mainNavToggle.classList.remove("active-menu");
    } else {
      mainNavToggle.classList.add("active-menu");
    }
  });

  toggleNav.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
    overlay.classList.toggle("show-overlay");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("show-nav");
      overlay?.classList.remove("show-overlay");
      mainNavToggle.classList.remove("active-menu");
    });
  });

  window.onscroll = () => {
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
      ? scrollToTopBtn.classList.add("show")
      : scrollToTopBtn.classList.remove("show");
  };

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });

  function updateSubmitButton() {
    nameError || emailError || subjectError || messageError
      ? (submit.disabled = true)
      : (submit.disabled = false);
  }

  name.addEventListener("input", () => {
    const value = name.value;

    if (value.length < 3) {
      nameError = "Your name must contain at least 3 characters";
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
      nameError = "Please enter a valid name (letters and spaces only)";
    } else {
      nameError = "";
    }

    if (nameError) {
      nameErrorMessage.style.display = "block";
      nameErrorMessage.innerHTML = nameError;
    } else {
      nameErrorMessage.style.display = "none";
    }

    updateSubmitButton();
  });

  email.addEventListener("input", () => {
    const value = email.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      emailError = "Please enter a valid email address";
    } else {
      emailError = "";
    }

    if (emailError) {
      emailErrorMessage.style.display = "block";
      emailErrorMessage.innerHTML = emailError;
    } else {
      emailErrorMessage.style.display = "none";
    }

    updateSubmitButton();
  });

  subject.addEventListener("input", () => {
    const value = subject.value;

    if (value === "" || value.length < 10) {
      subjectError = "Please enter a subject with at least 10 characters.";
    } else {
      subjectError = "";
    }

    if (subjectError) {
      subjectErrorMessage.style.display = "block";
      subjectErrorMessage.innerHTML = subjectError;
    } else {
      subjectErrorMessage.style.display = "none";
    }

    updateSubmitButton();
  });

  message.addEventListener("input", () => {
    const value = message.value;

    if (value === "" || value.length < 10) {
      messageError = "Please enter a message with at least 10 characters.";
    } else {
      messageError = "";
    }

    if (messageError) {
      messageErrorMessage.style.display = "block";
      messageErrorMessage.innerHTML = messageError;
    } else {
      messageErrorMessage.style.display = "none";
    }

    updateSubmitButton();
  });

  updateSubmitButton();
});
