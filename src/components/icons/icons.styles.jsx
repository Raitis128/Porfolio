import styled from "styled-components";

export const IconsSection = styled.section`
  width: 100%;
  min-width: 20rem;
  display: flex;
  justify-content: space-evenly;
  max-width: 33rem;
  align-items: center;
  margin: 0 auto;

  .leetcode {
    filter: invert(96%) sepia(10%) saturate(0%) hue-rotate(187deg)
      brightness(97%) contrast(88%);
    height: 100%;
    width: 100%;
    min-width: 3.5rem;
    min-height: 3.8rem;
  }

  @media only screen and (max-width: 760px) {
    a {
      margin-right: 3rem;
    }

    a:last-of-type {
      margin-right: 0;
    }
  }
`;
