import React from "react";
import Button from "../common/Button";
import MaterialTextField from "../common/Material/MaterialTextField";
import "./Register.scss";


interface RegisterProps {
  changePage: () => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  register: () => Promise<void>;
  emailAccredit: () => void;
  setAccredit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({
  changePage,
  email,
  setEmail,
  name,
  setName,
  pw,
  setPw,
  checkPw,
  setCheckPw,
  register,
  emailAccredit,
  setAccredit
}: RegisterProps) => {
  return (
    <>
      <div className="Register-Content">
        <div className="Register-Content-Text">
          <p className="Register-Content-Text-Title">회원가입</p>
        </div>
        <div className="Register-Content-Name">
          <MaterialTextField
            label="이름"
            variant="outlined"
            type="text"
            width="100%"
            size="small"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="Register-Content-Email">
          <MaterialTextField
            className="Register-Content-Email-textField"
            label="이메일"
            variant="outlined"
            type="text"
            width="100%"
            size="small"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div
            className="Register-Content-Email-divButton"
            onClick={() => {
              emailAccredit();
              setAccredit(true);
            }}
          >
            <span>메일 인증</span>
          </div>
        </div>
        <div className="Register-Content-Password">
          <MaterialTextField
            label="비밀번호"
            variant="outlined"
            type="password"
            width="100%"
            size="small"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </div>
        <div className="Register-Content-Check">
          <MaterialTextField
            label="비밀번호 확인"
            variant="outlined"
            type="password"
            width="100%"
            size="small"
            value={checkPw}
            onChange={(e) => setCheckPw(e.target.value)}
          />
        </div>
        <Button text="다음" style={{ height: "2.6rem" }} onClick={() => register()} />
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
