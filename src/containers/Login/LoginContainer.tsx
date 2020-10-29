import React from "react";
import Login from "../../components/Login";

interface LoginContainerProps {
  changePage: () => void;
}

const LoginContainer = ({ changePage }: LoginContainerProps) => {
  return (
    <>
      <Login changePage={changePage} />
    </>
  );
};

export default LoginContainer;
