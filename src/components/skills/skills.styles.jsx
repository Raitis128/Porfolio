import styled from "styled-components";

export const SkillsSection = styled.section`
  background-color: var(--background-dark-secondary);
  overflow: hidden;
  padding: 8rem 7rem;

  h2 {
    color: var(--text-color-dark-primary);
    font-size: 3.2rem;
    margin-bottom: 5rem;
  }

  img {
    width: 12rem;
    height: 12rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 4rem 7rem;

    h2 {
      font-size: 2.4rem;
    }

    img {
      width: 10rem;
      height: 10rem;
    }
  }

  @media only screen and (max-width: 760px) {
    padding: 4rem 2rem;

    img {
      width: 7rem;
      height: 7rem;
    }
  }
`;

export const ImagesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  @media only screen and (max-width: 1024px) {
    gap: 5rem;
  }

  @media only screen and (max-width: 760px) {
    gap: 3rem;
  }
`;

export const ImageContainer = styled.div`
  border: 0.5rem solid var(--background-light-primary);
  padding: 3.5rem;
  border-radius: 50%;

  &:hover {
    -webkit-box-shadow: 0px 0px 100px 0px var(--background-light-primary);
    -moz-box-shadow: 0px 0px 100px 0px var(--background-light-primary);
    box-shadow: 0px 0px 100px 0px var(--background-light-primary);
  }

  .mysql {
    filter: invert(99%) sepia(0%) saturate(447%) hue-rotate(171deg)
      brightness(95%) contrast(86%);
  }
`;
