import { IconsSection } from "./icons.styles";

// Importing the icons from react-icons
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const icons = [
  {
    href: "https://www.linkedin.com/in/raitis128/",
    IconComponent: FaLinkedin,
    class: "icon linkedin",
  },
  {
    href: "https://leetcode.com/u/raitis128/",
    IconComponent: SiLeetcode,
    class: "icon leetcode",
  },
  {
    href: "https://github.com/Raitis128",
    IconComponent: FaGithub,
    class: "icon github",
  },
];

const Icons = () => {
  return (
    <IconsSection className="icons">
      {icons.map((icon, index) => {
        const { IconComponent, href, class: iconClass } = icon;
        return (
          <a href={href} target="_blank" key={index}>
            <IconComponent className={iconClass} />
          </a>
        );
      })}
    </IconsSection>
  );
};

export default Icons;
