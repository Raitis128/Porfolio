import { HeaderComponent, Container, ButtonContainer } from "./header.styles";

import DesktopImage from "../../assets/img/Raitis-desktop.png";
import PhoneImage from "../../assets/img/Raitis-phone.png";
import TabletImage from "../../assets/img/Raitis-tablet.png";

import Icons from "../icons/icons.component";

const Header = () => {
  return (
    <HeaderComponent id="header">
      <Container>
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
      </Container>
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
