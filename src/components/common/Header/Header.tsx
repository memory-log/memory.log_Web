import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import title from "../../../assets/images/title.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  selectModal: () => void;
}

const Header = ({ selectModal }: HeaderProps) => {
  return (
    <>
      <div className="Header">
        <Link to="/">
          <div className="Header-Logo">
            <img className="Header-Logo-Icon" src={logo} alt={logo} />
            <img className="Header-Logo-Title" src={title} alt={title} />
          </div>
        </Link>
        <div className="Header-Account">
          <button className="Header-Account-Login" onClick={() => selectModal()}>
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
