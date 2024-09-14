//! SECTIONS
const inputEl = document.getElementById("dark-mode");
const burgerEl = document.getElementById("burger");
const navigationEl = document.getElementById("navigation");
const headerEl = document.getElementById("header");
const aboutEl = document.getElementById("about");
const skillsEl = document.getElementById("skills");
const projectsEl = document.getElementById("projects");
const contactEl = document.getElementById("contact");
const footerEl = document.getElementById("footer");
const navigationHeaderEl = document.getElementById("navigationHeader");
const hiddenNavEl = document.querySelector(".hidden-nav");

//! ICONS
const burgerIcon = document.getElementById("burgerIcon");
const instagramIcon = document.querySelectorAll(".instagram");
const linkedinIcon = document.querySelectorAll(".linkedin");
const githubIcon = document.querySelectorAll(".github");
const linkIcon = document.querySelectorAll(".link");

//! LOCAL STORAGE

const updateTheme = () => {
  if (inputEl.checked) {
    navigationEl.classList.add("light-mode-primary-background");
    headerEl.classList.add("light-mode-secondary-background");
    aboutEl.classList.add("light-mode-primary-background");
    skillsEl.classList.add("light-mode-secondary-background");
    projectsEl.classList.add("light-mode-primary-background");
    contactEl.classList.add("light-mode-secondary-background");
    footerEl.classList.add("light-mode-primary-background");
    navigationHeaderEl.classList.add("light-mode-primary-background");
  } else {
    navigationEl.classList.remove("light-mode-primary-background");
    headerEl.classList.remove("light-mode-secondary-background");
    aboutEl.classList.remove("light-mode-primary-background");
    skillsEl.classList.remove("light-mode-secondary-background");
    projectsEl.classList.remove("light-mode-primary-background");
    contactEl.classList.remove("light-mode-secondary-background");
    footerEl.classList.remove("light-mode-primary-background");
    navigationHeaderEl.classList.remove("light-mode-primary-background");
  }
};

const updateLocalStorage = () => {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
};

inputEl.checked = JSON.parse(localStorage.getItem("mode")) || false;
updateTheme();

//!  TOGGLE EVENT LISTENERS

inputEl.addEventListener("input", () => {
  updateTheme();
  updateLocalStorage();
});

//!  BURGER EVENT LISTENER

burgerEl.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-xmark");

    hiddenNavEl.style.display = "block";
    navigationEl.classList.add("border");
    navigationHeaderEl.style.position = "fixed";
  } else {
    burgerIcon.classList.remove("fa-xmark");
    burgerIcon.classList.add("fa-bars");

    hiddenNavEl.style.display = "none";
    navigationEl.classList.remove("border");
    navigationHeaderEl.style.position = "static";
  }
});

//! INSTAGRAM, LINKEDIN, GITHUB, LINK EVENT LISTENERS

instagramIcon.forEach((instagram) => {
  instagram.addEventListener("mouseover", () => {
    instagram.classList.add("fa-bounce");
  });

  instagram.addEventListener("mouseout", () => {
    instagram.classList.remove("fa-bounce");
  });
});

linkedinIcon.forEach((linkedin) => {
  linkedin.addEventListener("mouseover", () => {
    linkedin.classList.add("fa-bounce");
  });

  linkedin.addEventListener("mouseout", () => {
    linkedin.classList.remove("fa-bounce");
  });
});

githubIcon.forEach((github) => {
  github.addEventListener("mouseover", () => {
    github.classList.add("fa-bounce");
  });

  github.addEventListener("mouseout", () => {
    github.classList.remove("fa-bounce");
  });
});

linkIcon.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("fa-bounce");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("fa-bounce");
  });
});
