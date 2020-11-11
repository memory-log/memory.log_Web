import React from "react";
import "./Profile.scss";
import { ReactComponent as Person } from "../../assets/images/profilePage.svg";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <>
      <Person />
    </>
  );
};

export default Profile;
