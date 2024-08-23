const toggle = document.getElementById("toggle");
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

//  ICONS
const burgerIcon = document.getElementById("burgerIcon");
const moon = document.getElementById("moon");
const instagramElements = document.querySelectorAll(".instagram");
const linkedinElements = document.querySelectorAll(".linkedin");
const githubElements = document.querySelectorAll(".github");
const linkElements = document.querySelectorAll(".link");

// Certification images
const ffcLogo = document.querySelector(".ffc-logo");
const metaLogo = document.querySelector(
  ".certifications-logo[src='img/icons/meta-dark.svg']"
);
const codecademyLogo = document.querySelector(
  ".certifications-logo[src='img/icons/codecademy-dark.svg']"
);

toggle.addEventListener("click", () => {
  if (moon.classList.contains("fa-moon")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");

    ffcLogo.src = "img/icons/ffc-light.svg";
    metaLogo.src = "img/icons/meta-light.svg";
    codecademyLogo.src = "img/icons/codecademy-light.svg";
  } else {
    moon.classList.remove("fa-sun");
    moon.classList.add("fa-moon");

    ffcLogo.src = "img/icons/ffc-dark.svg";
    metaLogo.src = "img/icons/meta-dark.svg";
    codecademyLogo.src = "img/icons/codecademy-dark.svg";
  }

  navigation.classList.toggle("light-mode-primary-background");
  header.classList.toggle("light-mode-secondary-background");
  about.classList.toggle("light-mode-primary-background");
  skills.classList.toggle("light-mode-secondary-background");
  certifications.classList.toggle("light-mode-primary-background");
  projects.classList.toggle("light-mode-secondary-background");
  contact.classList.toggle("light-mode-primary-background");
  footer.classList.toggle("light-mode-secondary-background");
  navigationHeader.classList.toggle("light-mode-primary-background");
});

toggle.addEventListener("mouseover", () => {
  toggle.classList.add("fa-beat");
});

toggle.addEventListener("mouseout", () => {
  toggle.classList.remove("fa-beat");
});

burger.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-xmark");

    hiddenNav.style.display = "block";
    navigation.classList.add("border");
  } else {
    burgerIcon.classList.remove("fa-xmark");
    burgerIcon.classList.add("fa-bars");

    hiddenNav.style.display = "none";
    navigation.classList.remove("border");
  }
});

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
