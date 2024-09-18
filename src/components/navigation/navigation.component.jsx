import { NavigationHeader, Nav, LinksContainer } from "./navigation.styles";
import ToggleBurger from "../toggle-burger/toggle-burger.component";
import HiddenNavigation from "../hidden-navigation/hidden-navigation-component";

const Navigation = () => {
  const links = ["About", "Skills", "Projects", "Contact me"];

  const addLinks = (links) =>
    links.map((link) => (
      <a href={`#${link.toLowerCase()}`} key={link}>
        <li>{link}</li>
      </a>
    ));

  return (
    <NavigationHeader id="navigationHeader">
      <Nav id="navigation">
        <span>&lt;Raitis Ižiks /&gt;</span>
        <LinksContainer>{addLinks(links)}</LinksContainer>
        <ToggleBurger />
      </Nav>
      <HiddenNavigation links={links} addLinks={addLinks} />
    </NavigationHeader>
  );
};

export default Navigation;
