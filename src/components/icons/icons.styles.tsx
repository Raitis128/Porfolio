import styled from "styled-components";

export const IconsSection = styled.section`
  width: 100%;
  min-width: 20rem;
  display: flex;
  justify-content: space-evenly;
  max-width: 33rem;
  align-items: center;
  margin: 0 auto;
  gap: 3rem;

  .icon {
    height: 100%;
    width: 100%;
    min-width: 6.4rem;
    min-height: 6.4rem;
  }

  @media only screen and (max-width: 768px) {
    min-width: auto;
    gap: 1rem;

    .icon {
      min-width: 3.2rem;
      min-height: 3.2rem;
    }
  }

  &.light-mode {
    a {
      color: var(--text-color-light-primary);
    }
  }
`;
