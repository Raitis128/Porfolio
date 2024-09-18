import styled from "styled-components";

export const ContactSection = styled.section`
  background-color: var(--background-dark-secondary);
  text-align: center;
  color: var(--text-color-dark-primary);
  padding: 8rem 0;

  h2 {
    font-size: 3.2rem;
  }

  p {
    padding-top: 6rem;
    width: 45rem;
    font-size: 2rem;
    margin: 0 auto;

    @media only screen and (max-width: 1024px) {
      padding-top: 6rem;
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 768px) {
      padding: 4.8rem 7.3rem 0;
      width: auto;
    }
  }

  button {
    padding: 2rem 5.7rem;
    font-size: 2.4rem;
    border-radius: 5rem;
    background-color: var(--text-color-dark-secondary);
    color: var(--background-dark-primary);
    font-weight: bold;
    border: 0;
    margin-top: 4rem;
    cursor: pointer;

    @media only screen and (max-width: 1024px) {
      padding: 2rem 5rem;
    }

    @media only screen and (max-width: 768px) {
      padding: 1.3rem 3.5rem;
      font-size: 1.6rem;
    }

    &:hover {
      -webkit-box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 1);
      -moz-box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 1);
      box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 1);
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 7rem 0;

    h2 {
      font-size: 2.4rem;
    }

    .fa-4x {
      font-size: 3.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
  }
`;

export const ContactIcons = styled.section`
  padding-top: 6rem;
  max-width: 33rem;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding-top: 5.8rem;
  }

  @media only screen and (max-width: 760px) {
    padding-top: 3rem;
    justify-content: space-evenly;
  }
`;
