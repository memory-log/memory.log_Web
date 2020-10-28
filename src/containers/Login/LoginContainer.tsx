import React from "react";
import { inject, observer } from "mobx-react";
import Login from "../../components/Login/Login";
import AuthTemplate from "../../components/common/Template/AuthTemplate";

const LoginContainer = () => {
  return (
    <AuthTemplate>
      <Login />
    </AuthTemplate>
  );
};

export default inject("store")(observer(LoginContainer));
