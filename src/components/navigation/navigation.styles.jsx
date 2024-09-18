import styled from "styled-components";

export const NavigationHeader = styled.header`
  width: 100%;
  z-index: 1;
`;

export const Nav = styled.nav`
  background-color: var(--background-dark-primary);
  color: var(--text-color-dark-primary);
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  span {
    font-size: 3.2rem;
    font-family: "Architects Daughter", cursive;
    margin-left: 7rem;

    @media only screen and (max-width: 1440px) {
      font-size: 2rem;
    }

    @media only screen and (max-width: 1024px) {
      font-size: 2.4rem;
    }

    @media only screen and (max-width: 760px) {
      margin-left: 3rem;
    }

    @media only screen and (max-width: 375px) {
      font-size: 1.8rem;
    }
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  margin-right: 7rem;

  li {
    padding-left: 5rem;
    list-style: none;
    font-size: 3.2rem;

    @media only screen and (max-width: 1440px) {
      font-size: 2rem;
      padding-left: 3rem;
    }
  }

  li:hover {
    color: var(--text-color-dark-secondary);
  }
`;
