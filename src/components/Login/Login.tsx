import React from "react";
import MaterialTextField from "../common/Material/MaterialTextField";
import MaterialButton from "../common/Material/MaterialButton";
import "./Login.scss";
import lock from "../../assets/images/lock.svg";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

interface LoginProps {}

const Login = () => {
  return (
    <>
      <div className="Login">
        <div className="Login-Title">
          <FadeIn delay={100}>
            <div className="Login-Title-Id">
              <p>제 아이디는</p>
              <div className="Login-Title-Id-TextField">
                <MaterialTextField id="standard-password-input" label="아이디" type="text" width="10rem" height="1.4rem" />
              </div>
              <p>이며,</p>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="Login-Title-Password">
              <p>비밀번호는</p>
              <div className="Login-Title-Password-TextField">
                <MaterialTextField id="standard-password-input" label="비밀번호" type="password" width="10rem" height="1.4rem" />
              </div>
              <p className="Login-Title-Password-End">입니다.</p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={500}>
          <div className="Login-Image">
            <img src={lock} alt={lock} />
          </div>
        </FadeIn>
        <div className="Login-Button">
          <FadeIn delay={700}>
            <MaterialButton>로그인</MaterialButton>
          </FadeIn>
          <FadeIn delay={800}>
            <div className="Login-Button-Text">
              <p className="Login-Button-Text-Comment">앗 계정이 없는데 어떡하죠?</p>
              <Link to="/register">
                <p className="Login-Button-Text-Register">회원가입</p>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Login;
