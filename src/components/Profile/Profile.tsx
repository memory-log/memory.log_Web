import React, { ChangeEvent } from "react";
import "./Profile.scss";
import EditProfile from "./EditProfile";
import MyProfile from "./MyProfile";

interface ProfileProps {
  name: string;
  email: string;
  modify: boolean;
  changeName: string;
  setChangeName: React.Dispatch<React.SetStateAction<string>>;
  tryProfileModify: () => void;
  handleModifyProfileCallback: () => Promise<void>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  profileImg: string;
  preview: string | ArrayBuffer | null;
  idxFact: boolean;
}

const Profile = ({
  name,
  email,
  modify,
  changeName,
  setChangeName,
  tryProfileModify,
  handleModifyProfileCallback,
  handleImageChange,
  profileImg,
  preview,
  idxFact
}: ProfileProps) => {
  return (
    <>
      {modify ? (
        <EditProfile
          email={email}
          changeName={changeName}
          setChangeName={setChangeName}
          handleModifyProfileCallback={handleModifyProfileCallback}
          handleImageChange={handleImageChange}
          preview={preview}
        />
      ) : (
        <MyProfile name={name} email={email} tryProfileModify={tryProfileModify} profileImg={profileImg} idxFact={idxFact} />
      )}
    </>
  );
};

export default Profile;
