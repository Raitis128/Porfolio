import {
  HeaderComponent,
  HeaderContainer,
  ButtonContainer,
} from "./header.styles";

import DesktopImage from "../../assets/img/Raitis-desktop.png";
import PhoneImage from "../../assets/img/Raitis-phone.png";
import TabletImage from "../../assets/img/Raitis-tablet.png";

import Icons from "../icons/icons.component";
import { useEffect, useRef } from "react";

const Header = () => {
  const careerIndex = useRef(0);
  const characterIndex = useRef(0);

  useEffect(() => {
    const careers = [
      "Web Developer",
      "Fullstack Developer",
      "Js Developer",
      ".NET Developer",
    ];

    const careersEl = document.getElementById("careers");

    let timeoutId: number;

    const updateText = () => {
      if (careersEl) {
        careersEl.innerText = `I am a ${careers[careerIndex.current].slice(
          0,
          characterIndex.current
        )}`;
      }

      characterIndex.current++;

      if (characterIndex.current === careers[careerIndex.current].length + 1) {
        careerIndex.current++;
        characterIndex.current = 0;
      }

      if (careerIndex.current === careers.length) {
        careerIndex.current = 0;
      }

      timeoutId = setTimeout(updateText, 150);
    };

    updateText();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <HeaderComponent id="header">
      <HeaderContainer id="headerContainer">
        <h1>I&apos;m Raitis Ižiks</h1>
        <h2 id="careers">Web developer</h2>
        <img
          src={PhoneImage}
          alt="Photo of person who made portfolio"
          id="img3"
        />
        <ButtonContainer>
          <form action="resume.pdf" method="get">
            <button type="button">Resume</button>
          </form>
          <Icons />
        </ButtonContainer>
      </HeaderContainer>
      <img
        src={DesktopImage}
        alt="Photo of person who made portfolio"
        id="img1"
      />
      <img
        src={TabletImage}
        alt="Photo of person who made portfolio"
        id="img2"
      />
    </HeaderComponent>
  );
};

export default Header;
