import React from "react";
import Button from "../common/Button";
import MaterialTextField from "../common/Material/MaterialTextField";
import "./Register.scss";

interface RegisterProps {
  changePage: () => void;
}

const Register = ({ changePage }: RegisterProps) => {
  return (
    <>
      <div className="Register-Content">
        <div className="Register-Content-Text">
          <p className="Register-Content-Text-Title">회원가입</p>
        </div>
        <div className="Register-Content-Name">
          <MaterialTextField label="이름" variant="outlined" type="text" width="100%" size="small" />
        </div>
        <div className="Register-Content-Email">
          <MaterialTextField label="이메일" variant="outlined" type="text" width="100%" size="small" />
        </div>
        <div className="Register-Content-Password">
          <MaterialTextField label="비밀번호" variant="outlined" type="password" width="100%" size="small" />
        </div>
        <div className="Register-Content-Check">
          <MaterialTextField label="비밀번호 확인" variant="outlined" type="password" width="100%" size="small" />
        </div>
        <Button text="다음" height="2.6rem" />
        <div className="Register-Content-Register">
          <p className="Register-Content-Register-Comment">잘 생각해보니 있는 것 같아요...</p>
          <p className="Register-Content-Register-Link" onClick={changePage}>
            로그인
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
