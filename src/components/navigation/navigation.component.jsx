import { NavigationHeader, Nav, LinksContainer } from "./navigation.styles";

import ToggleBurger from "../toggle-burger/toggle-burger.component";
import HiddenNavigation from "../hidden-navigation/hidden-navigation-component";

import { useEffect, useState } from "react";

const Navigation = () => {
  const links = ["About", "Skills", "Projects", "Contact me"];

  const addLinks = (links) =>
    links.map((link) => (
      <a href={`#${link.toLowerCase()}`} key={link}>
        <li>{link}</li>
      </a>
    ));

  const [display, setDisplay] = useState("none");
  const [position, setPosition] = useState("static");

  useEffect(() => {
    const burger = document.getElementById("burger");

    const addHiddenNavigation = () => {
      display === "none" ? setDisplay("block") : setDisplay("none");
      position === "static" ? setPosition("fixed") : setPosition("static");
    };

    burger.addEventListener("click", addHiddenNavigation);

    return () => {
      burger.removeEventListener("click", addHiddenNavigation);
    };
  }, [display, position]);

  return (
    <NavigationHeader id="navigationHeader" style={{ position: position }}>
      <Nav id="navigation">
        <span>&lt;Raitis Ižiks /&gt;</span>
        <LinksContainer>{addLinks(links)}</LinksContainer>
        <ToggleBurger />
      </Nav>
      <HiddenNavigation links={links} addLinks={addLinks} display={display} />
    </NavigationHeader>
  );
};

export default Navigation;
