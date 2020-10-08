import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import title from "../../../assets/images/title.svg";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-Logo">
          <img className="Header-Logo-Icon" src={logo} alt={logo} />
          <img className="Header-Logo-Title" src={title} alt={title} />
        </div>
      </div>
    </>
  );
};

export default Header;
