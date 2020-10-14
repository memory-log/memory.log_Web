import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import title from "../../../assets/images/title.svg";
import MaterialButton from "../Material/MaterialButton";
import profile from "../../../assets/images/profile.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/login">
            <MaterialButton
              fontSize="0.2rem"
              backgroundColor="#8D9BFF"
              hoverColor="#AAB4FF"
              width="4.5rem"
              height="1.7rem"
              borderRadius="0.3rem"
              variant="contained"
            >
              로그인
            </MaterialButton>
          </Link>
          <img className="Header-Account-Profile" src={profile} alt={profile} />
        </div>
      </div>
    </>
  );
};

export default Header;
