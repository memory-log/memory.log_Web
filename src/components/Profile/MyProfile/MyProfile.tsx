import React from "react";
import Button from "../../common/Button";
import defaultProfile from "../../../assets/images/profile.svg";
import generateURL from "../../../lib/generateURL";

interface MyProfileProps {
  name: string;
  email: string;
  tryProfileModify: () => void;
  profileImg: string;
  idxFact: boolean;
}

const MyProfile = ({ name, email, tryProfileModify, profileImg, idxFact }: MyProfileProps) => {
  return (
    <>
      <div className="Profile-Content">
        <div className="Profile-Content-top">
          <img src={profileImg ? generateURL(profileImg) : defaultProfile} className="Profile-Content-top-Logo" alt="profile" />
          <div className="Profile-Content-top-middle">
            <div className="Profile-Content-top-middle-Text">
              <p className="Profile-Content-top-middle-Text-Name">{name}</p>
              {idxFact ? <></> : <p className="Profile-Content-top-middle-Text-Email">{email}</p>}
            </div>
            {idxFact ? (
              <></>
            ) : (
              <Button
                text="프로필 수정"
                style={{ width: "7rem", height: "2.5rem", fontWeight: "normal", borderRadius: "12px" }}
                className="Profile-Content-middle-Button"
                onClick={() => tryProfileModify()}
              />
            )}
          </div>
        </div>
        <div className="Profile-Content-Input"></div>
      </div>
    </>
  );
};

export default MyProfile;
