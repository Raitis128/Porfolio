import { HiddenNav } from "./hidden-navigation-styles";

const HiddenNavigation = () => {
  return (
    <HiddenNav>
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
    </HiddenNav>
  );
};

export default HiddenNavigation;
