//! SECTIONS
const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");
const header = document.getElementById("header");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const certifications = document.getElementById("certifications");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
const navigationHeader = document.getElementById("navigationHeader");
const hiddenNav = document.querySelector(".hidden-nav");

//! ICONS
const burgerIcon = document.getElementById("burgerIcon");
const instagramElements = document.querySelectorAll(".instagram");
const linkedinElements = document.querySelectorAll(".linkedin");
const githubElements = document.querySelectorAll(".github");
const linkElements = document.querySelectorAll(".link");

//! LOCAL STORAGE

const updateTheme = () => {
  navigation.classList.toggle("light-mode-primary-background");
  header.classList.toggle("light-mode-secondary-background");
  about.classList.toggle("light-mode-primary-background");
  skills.classList.toggle("light-mode-secondary-background");
  projects.classList.toggle("light-mode-primary-background");
  contact.classList.toggle("light-mode-secondary-background");
  footer.classList.toggle("light-mode-primary-background");
  navigationHeader.classList.toggle("light-mode-primary-background");
};

const updateLocalStorage = () => {};

//!  TOGGLE EVENT LISTENERS
// toggle.addEventListener("click", () => {
//   updateTheme();
//   updateLocalStorage();
// });

// toggle.addEventListener("mouseover", () => {
//   toggle.classList.add("fa-beat");
// });

// toggle.addEventListener("mouseout", () => {
//   toggle.classList.remove("fa-beat");
// });

//!  BURGER EVENT LISTENER

burger.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-xmark");

    hiddenNav.style.display = "block";
    navigation.classList.add("border");
    navigationHeader.style.position = "fixed";
  } else {
    burgerIcon.classList.remove("fa-xmark");
    burgerIcon.classList.add("fa-bars");

    hiddenNav.style.display = "none";
    navigation.classList.remove("border");
    navigationHeader.style.position = "static";
  }
});

//! INSTAGRAM, LINKEDIN, GITHUB, LINK EVENT LISTENERS

instagramElements.forEach((instagram) => {
  instagram.addEventListener("mouseover", () => {
    instagram.classList.add("fa-bounce");
  });

  instagram.addEventListener("mouseout", () => {
    instagram.classList.remove("fa-bounce");
  });
});

linkedinElements.forEach((linkedin) => {
  linkedin.addEventListener("mouseover", () => {
    linkedin.classList.add("fa-bounce");
  });

  linkedin.addEventListener("mouseout", () => {
    linkedin.classList.remove("fa-bounce");
  });
});

githubElements.forEach((github) => {
  github.addEventListener("mouseover", () => {
    github.classList.add("fa-bounce");
  });

  github.addEventListener("mouseout", () => {
    github.classList.remove("fa-bounce");
  });
});

linkElements.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("fa-bounce");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("fa-bounce");
  });
});
