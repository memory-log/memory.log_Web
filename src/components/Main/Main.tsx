import React from "react";
import AuthContainer from "../../containers/Auth/AuthContainer";
import "./Main.scss";

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <>
      <div className="Main">
        <AuthContainer />
      </div>
    </>
  );
};

export default Main;
