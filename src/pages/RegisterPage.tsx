import React from "react";
import RegisterContainer from "../containers/Register/RegisterContainer";
import AuthTemplate from "../components/common/Template/AuthTemplate";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterContainer />
    </AuthTemplate>
  );
};

export default RegisterPage;
