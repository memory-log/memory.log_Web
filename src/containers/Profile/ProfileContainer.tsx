import React from "react";
import { observer } from "mobx-react";
import Profile from "../../components/Profile/Profile";

const ProfileContainer = ({}) => {
  return (
    <>
      <Profile />
    </>
  );
};

export default observer(ProfileContainer);
