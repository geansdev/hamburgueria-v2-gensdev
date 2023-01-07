import React from "react";
import { ButtonStyled } from "./style";

export interface IButton {
  type: "submit" | "reset" | "button";
  name: string;
  button: string;
}

const Button = ({ type, name, button }: IButton) => {
  return (
    <ButtonStyled type={type} name={name}>
      {button}
    </ButtonStyled>
  );
};

export default Button;
