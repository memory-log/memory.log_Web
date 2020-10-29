import React from "react";
import "./Auth.scss";
import people from "../../assets/images/people.svg";
import Login from "../Login";
import Register from "../Register";

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
        {isPageChanged ? <Login changePage={changePage} /> : <Register changePage={changePage} />}
      </div>
    </>
  );
};

export default Auth;
