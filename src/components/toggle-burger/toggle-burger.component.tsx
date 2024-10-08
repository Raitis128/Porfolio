import { useEffect, useState } from "react";
import { BurgerButton, Buttons, ToggleButton } from "./toggle-burger.styles";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ToggleBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    if (toggleEl) {
      toggleEl.addEventListener("click", toggleDarkLightMode);
    }

    return () => {
      if (toggleEl) {
        toggleEl.removeEventListener("click", toggleDarkLightMode);
      }
    };
  }, []);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Buttons>
      <ToggleButton>
        <input type="checkbox" name="input" id="dark-mode" />
        <label htmlFor="dark-mode" className="label">
          <div className="circle"></div>
        </label>
      </ToggleButton>
      <BurgerButton type="button" id="burger" onClick={handleBurgerClick}>
        {isMenuOpen ? <IoClose className="close-icon" /> : <FaBars className="burger-icon" />}
      </BurgerButton>
    </Buttons>
  );
};

export default ToggleBurger;
