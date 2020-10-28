import React from "react";
import FadeIn from "react-fade-in";
import { Link, useHistory, withRouter } from "react-router-dom";
import MaterialButton from "../common/Material/MaterialButton";
import MaterialTextField from "../common/Material/MaterialTextField";
import "./Register.scss";

interface RegisterProps {}

const Register = () => {
  const history = useHistory();
  return (
    <>
      <div>
        <div className="Register-Title">
          <p>간단한 회원가입 후 롤링페이퍼를</p>
          <p>작성하실 수 있어요.</p>
        </div>
        <div className="Register-TextFields">
          <div className="Register-TextFields-TextField">
            <MaterialTextField label="이름" variant="outlined" type="text" width="19rem" size="small" />
          </div>
          <div className="Register-TextFields-TextField">
            <MaterialTextField label="아이디" variant="outlined" type="text" width="19rem" size="small" />
          </div>
          <div className="Register-TextFields-TextField">
            <MaterialTextField label="비밀번호" variant="outlined" type="password" width="19rem" size="small" />
          </div>
          <div className="Register-TextFields-TextField">
            <MaterialTextField label="비밀번호 확인" variant="outlined" type="password" width="19rem" size="small" />
          </div>
        </div>
      </div>
      <div className="Register-Button">
        <MaterialButton>다음</MaterialButton>
        <div className="Register-Button-Text">
          <p className="Register-Button-Text-Comment">잘 생각해보니 있는 것 같아요...</p>
          <Link to="/login">
            <p
              className="Register-Button-Text-Login"
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(Register);
