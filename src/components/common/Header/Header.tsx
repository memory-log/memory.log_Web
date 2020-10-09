import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import title from "../../../assets/images/title.svg";
import MaterialButton from "../Material/MaterialButton";
import profile from "../../../assets/images/profile.svg";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-Logo">
          <img className="Header-Logo-Icon" src={logo} alt={logo} />
          <img className="Header-Logo-Title" src={title} alt={title} />
        </div>
        <div className="Header-Account">
          <MaterialButton
            color="#FFFFFF"
            fontWeight={500}
            fontSize="0.2rem"
            backgroundColor="#8D9BFF"
            hoverColor="#AAB4FF"
            width="4.5rem"
            height="1.7rem"
            borderRadius="0.3rem"
            variant="contained"
            onClick={() => {}}
          >
            로그인
          </MaterialButton>
          <img className="Header-Account-Profile" src={profile} alt={profile} />
        </div>
      </div>
    </>
  );
};

export default Header;
