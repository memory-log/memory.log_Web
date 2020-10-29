import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  height: string;
}

const Button = ({ text, height }: ButtonProps) => {
  return (
    <>
      <button className="Button-Template" style={{ height: height }}>
        {text}
      </button>
    </>
  );
};

export default Button;
