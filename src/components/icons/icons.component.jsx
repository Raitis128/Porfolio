import { IconsSection } from "./icons.styles";
import LeetCode from "../../assets/img/leetcode.svg";

const icons = [
  {
    href: "https://www.linkedin.com/in/raitis128/",
    class: "fa-brands fa-linkedin fa-4x linkedin",
  },
  {
    href: "https://leetcode.com/u/raitis128/",
    class: "leetcode",
    src: LeetCode,
    alt: "Icon of leetcode",
  },
  {
    href: "https://github.com/Raitis128",
    class: "fa-brands fa-github fa-4x github",
  },
];

const Icons = () => {
  return (
    <IconsSection>
      {icons.map((icon, index) => {
        return (
          <a href={icon.href} target="_blank" key={index}>
            {Object.hasOwn(icon, "src") ? (
              <img src={icon.src} alt={icon.alt} className={icon.class}></img>
            ) : (
              <i className={icon.class}></i>
            )}
          </a>
        );
      })}
    </IconsSection>
  );
};

export default Icons;
