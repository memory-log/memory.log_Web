import React, { useCallback, useState } from "react";
import Register from "../../components/Register";
import { useHistory } from "react-router-dom";
import useStore from "../../lib/hooks/useStore";

interface RegisterContainerProps {
  changePage: () => void;
}

const RegisterContainer = ({ changePage }: RegisterContainerProps) => {
  const { store } = useStore();
  const { tryRegister } = store.AuthStore;

  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  const register = useCallback(async () => {
    if (!email || !pw || !name) {
      console.log("빈칸을 입력해 주세요");
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
  }, [email, pw, name]);

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
      />
    </>
  );
};

export default RegisterContainer;
