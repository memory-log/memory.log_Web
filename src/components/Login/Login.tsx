import React from "react";
import MaterialTextField from "../common/Material/MaterialTextField";
import MaterialButton from "../common/Material/MaterialButton";
import "./Login.scss";
import lock from "../../assets/images/lock.svg";
import FadeIn from "react-fade-in";
import { Link, useHistory, withRouter } from "react-router-dom";

interface LoginProps {}

const Login = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <div className="Login-Title">
          <div className="Login-Title-Id">
            <span>제 아이디는</span>
            <input className="Input-Style" placeholder="아이디" required />
            <span>이며,</span>
          </div>
          <div className="Login-Title-Password">
            <span>비밀번호는</span>
            <input className="Input-Style" type="password" placeholder="비밀번호" required />
            <br />
            <span className="Login-Title-Password-End">입니다.</span>
          </div>
        </div>
        <div className="Login-Image">
          <img src={lock} alt={lock} />
        </div>
      </div>
      <div className="Login-Button">
        <MaterialButton width="100%">로그인</MaterialButton>
        <div className="Login-Button-Text">
          <span className="Login-Button-Text-Comment">앗 계정이 없는데 어떡하죠?</span>
          <Link to="/register">
            <span
              className="Login-Button-Text-Register"
              onClick={() => {
                history.push("/register");
              }}
            >
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
