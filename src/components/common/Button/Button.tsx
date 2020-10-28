import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="Button-Template">{text}</button>
    </>
  );
};

export default Button;
