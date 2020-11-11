import React from "react";
import "./HeaderProfile.scss";

interface HeaderProfileProps {}

const HeaderProfile = ({}: HeaderProfileProps) => {
  return (
    <>
      <div className="HeaderProfile">
        <div className="HeaderProfile-div profile">
          <span>내 프로필</span>
        </div>
        <div className="HeaderProfile-div logout">
          <span>로그아웃</span>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
