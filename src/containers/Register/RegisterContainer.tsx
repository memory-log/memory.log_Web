import React, { useCallback, useState } from "react";
import Register from "../../components/Register";
import { useHistory } from "react-router-dom";
import useStore from "../../lib/hooks/useStore";

interface RegisterContainerProps {
  changePage: () => void;
}

const RegisterContainer = ({ changePage }: RegisterContainerProps) => {
  const { store } = useStore();
  const { tryRegister, tryAccredit } = store.AuthStore;

  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [accredit, setAccredit] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  const register = useCallback(async () => {
    if (!email || !pw || !name) {
      console.log("빈칸을 입력해 주세요");
    } else if (pw === checkPw) {
      console.log("비밀번호가 같지 않습니다.");
    } else if (accredit === false) {
      console.log("이메일 인증을 하지 않았습니다.");
    } else {
      tryRegister(email, name, pw)
        .then((res) => {
          console.log("가입성공");
          history.push("/");
        })
        .catch((err) => {
          console.log("가입실패");
        });
    }
  }, [email, pw, name, accredit]);

  const emailAccredit = () => {
    if (!email) {
      console.log("이메일을 적어주세요");
    } else {
      tryAccredit(email)
        .then((res) => {
          console.log("메일 발송");
        })
        .catch((err) => {
          console.log("메일 발송 실패");
        });
    }
  };

  return (
    <>
      <Register
        changePage={changePage}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        pw={pw}
        setPw={setPw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
        register={register}
        emailAccredit={emailAccredit}
        setAccredit={setAccredit}
      />
    </>
  );
};

export default RegisterContainer;
