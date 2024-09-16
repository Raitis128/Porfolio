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

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <ImagesSection>
        <ImageContainer>
          <img src={HTMLIcon} alt="Icon of html language" />
        </ImageContainer>
        <ImageContainer>
          <img src={CSSIcon} alt="Icon of css language" />
        </ImageContainer>
        <ImageContainer>
          <img src={JSIcon} alt="Icon of javascript programming language" />
        </ImageContainer>
        <ImageContainer>
          <img src={TSIcon} alt="Icon of typescript programming language" />
        </ImageContainer>
        <ImageContainer>
          <img src={GitIcon} alt="Icon of version control git" />
        </ImageContainer>
        <ImageContainer>
          <img src={SassIcon} alt="Icon of scripting language sass" />
        </ImageContainer>
        <ImageContainer>
          <img src={ReactIcon} alt="Icon of javascript library react" />
        </ImageContainer>
        <ImageContainer>
          <img src={BootstrapIcon} alt="Icon of css framework bootstrap" />
        </ImageContainer>
        <ImageContainer>
          <img className="mysql" src={MySQLIcon} alt="Icon of mysql database" />
        </ImageContainer>
        <ImageContainer>
          <img src={FirebaseIcon} alt="Icon of firebase database" />
        </ImageContainer>
        <ImageContainer>
          <img src={FigmaIcon} alt="Icon of design tool figma" />
        </ImageContainer>
        <ImageContainer>
          <img src={NetlifyIcon} alt="Icon of deployment platform netlify" />
        </ImageContainer>
      </ImagesSection>
    </SkillsSection>
  );
};

export default Skills;
