import React from "react";
import "./Auth.scss";
import people from "../../assets/images/people.svg";
import LoginContainer from "../../containers/Login/LoginContainer";
import RegisterContainer from "../../containers/Register/RegisterContainer";

interface AuthProps {
  isPageChanged: boolean;
  changePage: () => void;
}

const Auth = ({ isPageChanged, changePage }: AuthProps) => {
  return (
    <>
      <div className="Auth">
        <div className="Auth-Picture">
          <img src={people} alt={people} />
        </div>
        {isPageChanged ? <LoginContainer changePage={changePage} /> : <RegisterContainer changePage={changePage} />}
      </div>
    </>
  );
};

export default Auth;
