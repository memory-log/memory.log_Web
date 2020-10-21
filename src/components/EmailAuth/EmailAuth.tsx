import React from "react";
import "./EmailAuth.scss";
import MaterialButton from "../common/Material/MaterialButton";
import MaterialTextField from "../common/Material/MaterialTextField";

interface EmailAuthProps {}

const EmailAuth = () => {
  return (
    <>
      <div className="EmailAuth">
        <div className="EmailAuth-Container">
          <div className="EmailAuth-Container-text">
            <p>이메일을 확인해 주세요.</p>
            <p>도와줄 친구가 있을거에요.</p>
          </div>
          <div className="EmailAuth--Containerinput">
            <MaterialTextField label="인증번호" variant="outlined" type="text" width="19rem" size="small" />
          </div>
        </div>
        <div className="EmailAuth-button">
          <MaterialButton>완료</MaterialButton>
        </div>
      </div>
    </>
  );
};

export default EmailAuth;
