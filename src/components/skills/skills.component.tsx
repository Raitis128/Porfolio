import { SkillsSection, ImagesSection, ImageContainer } from "./skills.styles";

import HTMLIcon from "../../assets/img/skills/html.png";
import CSSIcon from "../../assets/img/skills/css-3.png";
import JSIcon from "../../assets/img/skills/js.png";
import TSIcon from "../../assets/img/skills/typescript.png";
import GitIcon from "../../assets/img/skills/git.png";
import SassIcon from "../../assets/img/skills/sass.png";
import ReactIcon from "../../assets/img/skills/react.png";
import BootstrapIcon from "../../assets/img/skills/bootstrap.png";
import MySQLIcon from "../../assets/img/skills/mysql.svg";
import FirebaseIcon from "../../assets/img/skills/firebase.png";
import FigmaIcon from "../../assets/img/skills/figma.png";
import NetlifyIcon from "../../assets/img/skills/netlify.png";

type Icons = {
  src: string;
  alt: string;
};

const Skills = () => {
  const icons: Icons[] = [
    { src: HTMLIcon, alt: "Icon of html language" },
    { src: CSSIcon, alt: "Icon of css language" },
    { src: JSIcon, alt: "Icon of javascript programming language" },
    { src: TSIcon, alt: "Icon of typescript programming language" },
    { src: GitIcon, alt: "Icon of version control git" },
    { src: SassIcon, alt: "Icon of scripting language sass" },
    { src: ReactIcon, alt: "Icon of javascript library react" },
    { src: BootstrapIcon, alt: "Icon of javascript library bootstrap" },
    { src: MySQLIcon, alt: "Icon of database mysql" },
    { src: FirebaseIcon, alt: "Icon of firebase" },
    { src: FigmaIcon, alt: "Icon of figma" },
    { src: NetlifyIcon, alt: "Icon of netlify" },
  ];

  const addIcons = (icons: Icons[]) => {
    return icons.map((icon, index) => {
      return (
        <ImageContainer key={index} className="imageContainer">
          <img
            src={icon.src}
            alt={icon.alt}
            className={icon.src === MySQLIcon ? "mysql" : undefined}
          />
        </ImageContainer>
      );
    });
  };

  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <ImagesSection>{addIcons(icons)}</ImagesSection>
    </SkillsSection>
  );
};

export default Skills;
