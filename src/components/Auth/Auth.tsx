import React from "react";
import "./Auth.scss";
import people from "../../assets/images/people.svg";
import LoginContainer from "../../containers/Auth/Login/LoginContainer";
import RegisterContainer from "../../containers/Auth/Register/RegisterContainer";

interface AuthProps {
  page: boolean;
  changePage: () => void;
}

const Auth = ({ page, changePage }: AuthProps) => {
  return (
    <>
      <div className="Auth">
        <div className="Auth-Picture">
          <img src={people} alt={people} />
        </div>
        {page ? <LoginContainer changePage={changePage} /> : <RegisterContainer changePage={changePage} />}
      </div>
    </>
  );
};

export default Auth;
