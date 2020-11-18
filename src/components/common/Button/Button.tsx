import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, style, className, id, children, onClick }: ButtonProps) => {
  return (
    <>
      <button id={id} className={`Button-Template ${className ? className : ""}`} style={style} onClick={onClick}>
        {children}
        {text}
      </button>
    </>
  );
};

export default Button;
