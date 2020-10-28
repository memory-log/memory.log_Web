import React from "react";
import LoginContainer from "../../containers/Login/LoginContainer";
import "./Main.scss";

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <>
      <div className="Main">
        <LoginContainer />
      </div>
    </>
  );
};

export default Main;
