import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import title from "../../../assets/images/title.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  shadow: boolean;
  hide: boolean;
  showModal: () => void;
}

const Header = ({ shadow, hide, showModal }: HeaderProps) => {
  return (
    <>
      <div className={hide ? "Header-Hide Header" : shadow ? "Header-Shadow Header" : "Header"}>
        <div className="Header-Container">
          <Link to="/">
            <div className="Header-Logo">
              <img className="Header-Logo-Icon" src={logo} alt={logo} />
              <img className="Header-Logo-Title" src={title} alt={title} />
            </div>
          </Link>
          <div className="Header-Account">
            <button className="Header-Account-Login" onClick={() => showModal()}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
