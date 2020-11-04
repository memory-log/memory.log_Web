import React, { useCallback, useEffect, useState } from "react";
import Login from "../../components/Login";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import useStores from "../../lib/hooks/useSotres";

interface LoginContainerProps {
  changePage: () => void;
}

const LoginContainer = ({ changePage }: LoginContainerProps) => {
  const { store } = useStores();
  const { tryLogin } = store.AuthStore;

  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const login = useCallback(async () => {
    tryLogin(email, pw)
      .then((res: any) => {
        console.log(res);
        history.push("/");
      })
      .catch((err: Error) => {
        console.log("로그인에 실페하였습니다");
      });
  }, [email, pw]);

  useEffect(() => {
    console.log(email, pw);
  }, [email, pw]);

  return (
    <>
      <Login changePage={changePage} email={email} setEmail={setEmail} pw={pw} setPw={setPw} login={login} />
    </>
  );
};

export default observer(LoginContainer);
