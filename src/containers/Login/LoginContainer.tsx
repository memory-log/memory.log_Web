import React, { useCallback, useState } from "react";
import Login from "../../components/Login";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import useStore from "../../lib/hooks/useStore";
import { LoginResponse } from "../../util/types/Response";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

interface LoginContainerProps {
  changePage: () => void;
}

const LoginContainer = ({ changePage }: LoginContainerProps) => {
  const { store } = useStore();
  const { tryLogin, showModal } = store.AuthStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const login = useCallback(async () => {
    tryLogin(email, pw)
      .then((res: LoginResponse) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        setCookie("refreshToken", res.data.refreshToken, { path: "/" });
        Swal.fire("로그인 성공", "롤링페이퍼로 좋은 추억 남기세요!", "success");
        showModal();
      })
      .catch((err: Error) => {
        Swal.fire({ icon: "error", title: "로그인 실패", text: "아이디 비밀번호 다시 확인해 주세요" });
      });
  }, [email, pw]);

  return (
    <>
      <Login changePage={changePage} email={email} setEmail={setEmail} pw={pw} setPw={setPw} login={login} />
    </>
  );
};

export default observer(LoginContainer);
