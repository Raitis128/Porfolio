const toggle = document.getElementById("toggle");
const navigation = document.getElementById("navigation");
const icon = document.getElementById("icon");
const header = document.getElementById("header");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const certifications = document.getElementById("certifications");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");

//  ICONS
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
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    ffcLogo.src = "img/icons/ffc-light.svg";
    metaLogo.src = "img/icons/meta-light.svg";
    codecademyLogo.src = "img/icons/codecademy-light.svg";
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

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
});

toggle.addEventListener("mouseover", () => {
  toggle.classList.add("fa-beat");
});

toggle.addEventListener("mouseout", () => {
  toggle.classList.remove("fa-beat");
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
