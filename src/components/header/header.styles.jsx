import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 70rem;
  background-color: var(--background-dark-secondary);
  color: var(--text-color-dark-primary);
  display: flex;
  justify-content: center;
  align-items: center;

  #img2,
  #img3 {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    height: 40rem;

    #img1 {
      display: none;
    }

    #img2 {
      display: block;
    }

    img {
      width: 30rem;
      height: 33rem;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 40.6rem;
    align-items: normal;

    #img2 {
      display: none;
    }

    #img3 {
      display: block;
    }

    img {
      width: 16.5rem;
      height: 18rem;
      margin-left: 0;
    }
  }
`;

export const Container = styled.section`
  min-width: 41rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 8rem;
    color: var(--text-color-dark-secondary);
  }

  button {
    cursor: pointer;
    padding: 2rem 5.7rem;
    font-size: 2.4rem;
    border-radius: 5rem;
    background-color: var(--text-color-dark-secondary);
    color: var(--background-dark-primary);
    font-weight: bold;
    margin-bottom: 8.5rem;
    border: 0;
  }

  button:hover {
    -webkit-box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 1);
  }

  @media only screen and (max-width: 1024px) {
    img {
      margin-left: 0;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 2.8rem;
      margin-bottom: 3.8rem;
    }

    button {
      font-size: 2rem;
      padding: 1.7rem 3.3rem;
      margin-bottom: 5rem;
    }

    .fa-4x {
      font-size: 3.5rem;
    }

    @media only screen and (max-width: 768px) {
      min-width: auto;

      h1 {
        font-size: 2.4rem;
        padding: 2.5rem 0 1rem;
        margin: 0;
      }

      button {
        margin: 0;
        padding: 0.9rem 1.9rem;
        font-size: 1.6rem;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }
    }
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    padding-top: 3.7rem;

    form {
      display: flex;
      align-items: center;
      margin-right: 3rem;
    }
  }
`;
