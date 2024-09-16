import styled from "styled-components";

export const AboutArticle = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--text-color-dark-primary);
  background-color: var(--background-dark-primary);
  align-items: center;
  padding: 8rem 18rem;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 5rem;
  }

  p {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 1440px) {
    p {
      font-size: 2.3rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 4rem 7rem;

    p {
      font-size: 2rem;
    }

    h2 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 760px) {
    align-items: flex-start;

    p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 4rem 2rem;
  }
`;
