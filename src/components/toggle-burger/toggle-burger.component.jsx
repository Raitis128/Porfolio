import { BurgerButton, Buttons, ToggleButton } from "./toggle-burger.styles";

const ToggleBurger = () => {
  return (
    <Buttons>
      <ToggleButton>
        <input type="checkbox" name="input" id="dark-mode" />
        <label htmlFor="dark-mode" className="label">
          <div className="circle"></div>
        </label>
      </ToggleButton>
      <BurgerButton type="button" id="burger">
        <i className="fa-solid fa-bars" id="burgerIcon"></i>
      </BurgerButton>
    </Buttons>
  );
};

export default ToggleBurger;
