import React, { MouseEvent, useEffect } from "react";
import "./HeaderProfile.scss";

interface HeaderProfileProps {
  logOut: () => void;
  MyProfile: () => void;
  onClose: () => void;
}

const HeaderProfile = ({ logOut, MyProfile, onClose }: HeaderProfileProps) => {
  useEffect(() => {
    document.addEventListener("click", onClose);
    return () => document.removeEventListener("click", onClose);
  }, []);

  return (
    <>
      <div className="HeaderProfile">
        <div className="HeaderProfile-div profile" onClick={() => MyProfile()}>
          <span>내 프로필</span>
        </div>
        <div className="HeaderProfile-div logout" onClick={() => logOut()}>
          <span>로그아웃</span>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
