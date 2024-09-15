import { NavigationHeader, Nav, LinksContainer } from "./navigation.styles";
import ToggleBurger from "../toggle-burger/toggle-burger.component";
import HiddenNavigation from "../hidden-navigation/hidden-navigation-component";

const Navigation = () => {
  return (
    <NavigationHeader id="navigationHeader">
      <Nav id="navigation">
        <span>&lt;Raitis Ižiks /&gt;</span>
        <LinksContainer>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#certifications">
            <li>Certifications</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact me</li>
          </a>
        </LinksContainer>
        <ToggleBurger />
      </Nav>
      <HiddenNavigation />
    </NavigationHeader>
  );
};

export default Navigation;
