import { NavigationHeader, Nav, LinksContainer } from "./navigation.styles";

import ToggleBurger from "../toggle-burger/toggle-burger.component";
import HiddenNavigation from "../hidden-navigation/hidden-navigation-component";

import { useEffect, useState } from "react";

const Navigation = () => {
  const links = ["About", "Skills", "Projects", "Contact"];

  const [isNavVisible, setIsNavVisible] = useState(false);

  const addLinks = (links: string[]) =>
    links.map((link) => (
      <a href={`#${link.toLowerCase()}`} key={link}>
        <li>{link}</li>
      </a>
    ));

  useEffect(() => {
    const toggleNavigation = () => {
      setIsNavVisible(!isNavVisible);
    };

    const burgerEl = document.getElementById("burger");

    if (!burgerEl) {
      console.log("Burger elements are not found in DOM!");
      return;
    }

    burgerEl.addEventListener("click", toggleNavigation);

    return () => {
      burgerEl.removeEventListener("click", toggleNavigation);
    };
  }, [isNavVisible]);

  return (
    <NavigationHeader className={isNavVisible ? "fixed" : "static"}>
      <Nav id="navigation">
        <span>&lt;Raitis Ižiks /&gt;</span>
        <LinksContainer id="linksContainer">{addLinks(links)}</LinksContainer>
        <ToggleBurger />
      </Nav>
      <HiddenNavigation
        links={links}
        addLinks={addLinks}
        isVisible={isNavVisible}
      />
    </NavigationHeader>
  );
};

export default Navigation;
