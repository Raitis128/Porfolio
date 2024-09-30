import { NavigationHeader, Nav, LinksContainer } from "./navigation.styles";

import ToggleBurger from "../toggle-burger/toggle-burger.component";
import HiddenNavigation from "../hidden-navigation/hidden-navigation-component";

import React, { useEffect, useState } from "react";

const Navigation = () => {
  const links = ["About", "Skills", "Projects", "Contact"];

  type Position = "fixed" | "static";

  const addLinks = (links: string[]) =>
    links.map((link) => (
      <a href={`#${link.toLowerCase()}`} key={link}>
        <li>{link}</li>
      </a>
    ));

  const [display, setDisplay] = useState("none");
  const [position, setPosition] = useState<Position>("static");

  useEffect(() => {
    const burgerEl = document.getElementById("burger");
    const burgerIconEl = document.getElementById("burgerIcon");

    if (!burgerEl || !burgerIconEl) {
      console.log("Burger elements are not found in DOM!");
      return;
    }

    const addHiddenNavigation = () => {
      setDisplay(display === "none" ? "block" : "none");
      setPosition(position === "static" ? "fixed" : "static");
    };

    const changeBurgerToCloseBtn = () => {
      if (burgerIconEl.classList.contains("fa-bars")) {
        burgerIconEl.classList.remove("fa-bars");
        burgerIconEl.classList.add("fa-xmark");
      } else {
        burgerIconEl.classList.remove("fa-xmark");
        burgerIconEl.classList.add("fa-bars");
      }
    };

    const handleBurgerClick = () => {
      addHiddenNavigation();
      changeBurgerToCloseBtn();
    };

    burgerEl.addEventListener("click", handleBurgerClick);

    return () => {
      burgerEl.removeEventListener("click", handleBurgerClick);
    };
  }, [display, position]);

  return (
    <NavigationHeader id="navigationHeader" style={{ position: position }}>
      <Nav id="navigation">
        <span>&lt;Raitis Ižiks /&gt;</span>
        <LinksContainer id="linksContainer">{addLinks(links)}</LinksContainer>
        <ToggleBurger />
      </Nav>
      <HiddenNavigation links={links} addLinks={addLinks} display={display} />
    </NavigationHeader>
  );
};

export default Navigation;
