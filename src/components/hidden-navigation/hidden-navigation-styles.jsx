import styled from "styled-components";

export const HiddenNav = styled.nav`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    background-color: var(--background-dark-primary);
    border-bottom: 1px solid var(--text-color-dark-primary);
    font-size: 2rem;
  }

  li {
    list-style: none;
  }
`;
