import React from "react";
import { inject, observer } from "mobx-react";
import Login from "../../components/Login/Login";

const LoginContainer = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default inject("store")(observer(LoginContainer));
