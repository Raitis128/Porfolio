import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const BurgerButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 3.2rem;
  color: var(--text-color-dark-primary);
  margin-right: 7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;

  i {
    display: none;

    @media only screen and (max-width: 1024px) {
      display: inline;
    }
  }
`;

export const ToggleButton = styled.div`
  padding-right: 40px;
  transition: 0.4s;

  label {
    display: block;
    position: relative;
    width: 6rem;
    height: 3rem;
    background-color: lightgray;
    border-radius: 20px;
    cursor: pointer;
  }

  input {
    display: none;
  }

  input:checked + .label {
    background-color: white;
  }

  input:checked + .label .circle {
    animation: toggleOn 0.4s linear forwards;
    background-color: #000;
  }

  .circle {
    width: 2.4rem;
    height: 2.4rem;
    background-color: #fff;
    border-radius: 50%;
    top: 0.3rem;
    position: absolute;
    left: 0.3rem;
    animation: toggleOff 0.4s linear forwards;
  }

  @keyframes toggleOn {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(3rem);
    }
  }

  @keyframes toggleOff {
    0% {
      transform: translateX(3rem);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
