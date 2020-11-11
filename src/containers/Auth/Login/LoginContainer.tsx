import React, { useCallback, useEffect, useState } from "react";
import Login from "../../../components/Auth/Login";
import { observer } from "mobx-react";
import useStore from "../../../lib/hooks/useStore";
import { LoginResponse } from "../../../util/types/Response";
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

  const handleLogin = useCallback(async () => {
    tryLogin(email, pw)
      .then((res: LoginResponse) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        setCookie("refreshToken", res.data.refreshToken, { path: "/" });
        Swal.fire({ icon: "success", title: "로그인 성공", text: "성공적으로 로그인 되었습니다!" });
        showModal();
      })
      .catch((err: Error) => {
        console.log("에러");
        Swal.fire({ icon: "error", title: "로그인 실패", text: "아이디 또는 비밀번호가 잘못되었습니다." });
      });
  }, [email, pw]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        handleLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <Login changePage={changePage} email={email} setEmail={setEmail} pw={pw} setPw={setPw} handleLogin={handleLogin} />
    </>
  );
};

export default observer(LoginContainer);
