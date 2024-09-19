import { useEffect } from "react";
import { BurgerButton, Buttons, ToggleButton } from "./toggle-burger.styles";

const ToggleBurger = () => {
  useEffect(() => {
    const toggleEl = document.getElementById("dark-mode");
    const navigationEl = document.getElementById("navigation");
    const headerEl = document.getElementById("header");
    const aboutEl = document.getElementById("about");
    const skillsEl = document.getElementById("skills");
    const projectsEl = document.getElementById("projects");
    const contactEl = document.getElementById("contact");
    const footerEl = document.getElementById("footer");
    const linksContainerEl = document.getElementById("linksContainer");
    const burgerEl = document.getElementById("burger");
    const hiddenNavEl = document.getElementById("hiddenNav");
    const headerContainerEl = document.getElementById("headerContainer");
    const iconsEls = document.getElementsByClassName("icons");
    const imageContainerEls = document.getElementsByClassName("imageContainer");
    const cardEls = document.getElementsByClassName("cards");

    const components = [
      toggleEl,
      navigationEl,
      headerEl,
      aboutEl,
      skillsEl,
      projectsEl,
      contactEl,
      footerEl,
      linksContainerEl,
      burgerEl,
      hiddenNavEl,
      headerContainerEl,
    ];

    const toggleDarkLightMode = () => {
      components.forEach((component) => {
        if (component) {
          component.classList.toggle("light-mode");
        }
      });

      Array.from(iconsEls).forEach((iconEl) => {
        iconEl.classList.toggle("light-mode");
      });

      Array.from(imageContainerEls).forEach((imageContainerEl) => {
        imageContainerEl.classList.toggle("light-mode");
      });

      Array.from(cardEls).forEach((cardEl) => {
        cardEl.classList.toggle("light-mode");
      });
    };

    toggleEl.addEventListener("click", toggleDarkLightMode);

    return () => {
      toggleEl.removeEventListener("click", toggleDarkLightMode);
    };
  });

  return (
    <Buttons>
      <ToggleButton>
        <input type="checkbox" name="input" id="dark-mode" />
        <label htmlFor="dark-mode" className="label">
          <div className="circle"></div>
        </label>
      </ToggleButton>
      <BurgerButton type="button" id="burger">
        <i className="fa-solid fa-bars" id="burgerIcon"></i>
      </BurgerButton>
    </Buttons>
  );
};

export default ToggleBurger;
