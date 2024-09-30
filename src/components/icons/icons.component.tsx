import { IconsSection } from "./icons.styles";
import LeetCode from "../../assets/img/leetcode.svg";
import React, { useEffect } from "react";

const icons = [
  {
    href: "https://www.linkedin.com/in/raitis128/",
    class: "icon fa-brands fa-linkedin fa-4x linkedin",
  },
  {
    href: "https://leetcode.com/u/raitis128/",
    class: "icon leetcode",
    src: LeetCode,
    alt: "Icon of leetcode",
  },
  {
    href: "https://github.com/Raitis128",
    class: "icon fa-brands fa-github fa-4x github",
  },
];

const Icons = () => {
  useEffect(() => {
    const iconsEls = Array.from(document.getElementsByClassName("icon"));

    const mouseOn = (event: Event) => {
      const target = event.target as HTMLElement;
      target.classList.add("fa-beat");
    };

    const mouseOut = (event: Event) => {
      const target = event.target as HTMLElement;
      target.classList.remove("fa-beat");
    };

    iconsEls.forEach((iconEl) => {
      if (iconEl) {
        iconEl.addEventListener("mouseover", mouseOn);
        iconEl.addEventListener("mouseout", mouseOut);
      }
    });

    return () => {
      iconsEls.forEach((iconEl) => {
        if (iconEl) {
          iconEl.removeEventListener("mouseover", mouseOn);
          iconEl.removeEventListener("mouseout", mouseOut);
        }
      });
    };
  }, []);

  return (
    <IconsSection className="icons">
      {icons.map((icon, index) => {
        return (
          <a href={icon.href} target="_blank" key={index}>
            {"src" in icon ? (
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
