import styled from "styled-components";

export const FooterComponent = styled.footer`
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-dark-primary);
  color: var(--text-color-dark-primary);
  font-size: 2rem;
  font-weight: bold;

  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
