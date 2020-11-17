import React, { ChangeEvent } from "react";
import Button from "../../common/Button";
import defaultProfile from "../../../assets/images/profile.svg";
import { ReactComponent as Floder } from "../../../assets/images/blueFolder.svg";

interface EditProfileProps {
  email: string;
  changeName: string;
  setChangeName: React.Dispatch<React.SetStateAction<string>>;
  handleModifyProfileCallback: () => Promise<void>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  preview: string | ArrayBuffer | null;
}

const EditProfile = ({
  email,
  changeName,
  setChangeName,
  handleModifyProfileCallback,
  handleImageChange,
  preview
}: EditProfileProps) => {
  return (
    <>
      <div className="Profile-Content">
        <div className="Profile-Content-top">
          <img src={preview ? preview.toString() : defaultProfile} className="Profile-Content-top-Logo" alt="profile" />
          <div>
            <label htmlFor="file">
              <Floder className="Profile-Content-top-folder" />
            </label>
            <input
              onChange={(e) => handleImageChange(e)}
              type="file"
              id="file"
              className="Profile-Content-top-input"
              accept="image/png image/jpeg image/jpg"
            />
          </div>
          <div className="Profile-Content-top-middle">
            <div className="Profile-Content-top-middle-Text">
              <input
                value={changeName}
                className="Profile-Content-top-middle-Text-input"
                onChange={(e) => setChangeName(e.target.value)}
              />
              <p className="Profile-Content-top-middle-Text-Email">{email}</p>
            </div>
            <Button
              text="프로필 수정 완료"
              style={{ width: "10rem", height: "2.5rem", fontWeight: "normal", borderRadius: "12px" }}
              className="Profile-Content-middle-Button"
              onClick={() => handleModifyProfileCallback()}
            />
          </div>
        </div>

        <div className="Profile-Content-Input"></div>
      </div>
    </>
  );
};

export default EditProfile;
