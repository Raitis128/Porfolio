import styled from "styled-components";

export const ProjectsSection = styled.section`
  background-color: var(--background-dark-primary);
  color: var(--text-color-dark-primary);

  padding: 8rem 8rem;

  h2 {
    margin-bottom: 8rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 5rem 5rem;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 5rem;
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 5rem 0;
  }
`;

export const Project = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: 5rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  img {
    width: 56rem;
    height: 49rem;
    border-radius: 1rem;
    object-fit: cover;
  }

  @media only screen and (max-width: 1024px) {
    img {
      width: 39rem;
      height: 33rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;

    img {
      max-width: 50rem;
      min-height: 40rem;
      width: 100%;
      margin: 0 auto;
    }

    img:nth-child(odd) {
      border-radius: 1rem 1rem 0 0;
    }

    img:nth-child(even) {
      border-radius: 0 0 1rem 1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    img {
      min-height: 30rem;
    }

    img:nth-child(odd),
    img:nth-child(even) {
      border-radius: 0;
    }
  }
`;

export const Card = styled.section`
  background-color: var(--background-dark-secondary);
  opacity: 0.95;
  border-radius: 1rem;
  min-height: 35rem;
  max-width: 60rem;
  box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.8);
  padding: 5rem 4rem;

  h3 {
    color: var(--text-color-dark-secondary);
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }

  span {
    font-size: 2rem;
    margin-right: 3rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }

  i {
    margin-right: 3rem;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 42rem;
    min-height: 24rem;
    padding: 4rem 4rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    span {
      font-size: 1.4rem;
      margin-right: 2rem;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 3rem;
    }

    i {
      font-size: 2rem !important;
      margin-right: 1.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 50rem;
    min-height: 20rem;
    margin: 0 auto;
    box-shadow: none;
    padding: 3rem 3rem;

    &:nth-child(odd) {
      border-radius: 1rem 1rem 0 0;
    }

    &:nth-child(even) {
      border-radius: 0 0 1rem 1rem;
    }

    h3 {
      text-align: center;
    }

    nav {
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 425px) {
    &:nth-child(odd),
    &:nth-child(even) {
      border-radius: 0;
    }
  }
`;

export const Tools = styled.section`
  margin-bottom: 3rem;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
