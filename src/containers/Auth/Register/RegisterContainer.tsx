import React, { useCallback, useState } from "react";
import Register from "../../../components/Auth/Register";
import useStore from "../../../lib/hooks/useStore";
import Swal from "sweetalert2";

interface RegisterContainerProps {
  changePage: () => void;
}

const RegisterContainer = ({ changePage }: RegisterContainerProps) => {
  const { store } = useStore();
  const { tryRegister, tryAccredit } = store.AuthStore;

  const [email, setEmail] = useState<string>("");
  const [accredit, setAccredit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  const handleRegister = useCallback(async () => {
    if (!email || !pw || !name) {
      Swal.fire({ icon: "error", title: "회원가입 실패", text: "빈칸을 모두 입력해 주세요!" });
    } else if (pw !== checkPw) {
      Swal.fire({ icon: "error", title: "회원가입 실패", text: "비밀번호가 일치하지 않습니다!" });
    } else if (accredit === false) {
      Swal.fire({ icon: "error", title: "회원가입 실패", text: "인증되지 않은 이메일입니다!" });
    } else {
      tryRegister(email, name, pw)
        .then((res) => {
          Swal.fire({ icon: "success", title: "회원가입 성공", text: "회원가입이 완료되었습니다!" });
          changePage();
        })
        .catch((err) => {
          Swal.fire({ icon: "error", title: "회원가입 실패", text: "알 수 없는 오류가 발생했습니다!" });
        });
    }
  }, [email, pw, name, accredit, checkPw]);

  const handleEmailAccredit = () => {
    setLoading(true);
    if (!email) {
      Swal.fire({ icon: "error", title: "메일", text: "메일을 입력해 주세요" });
      setLoading(false);
    } else {
      tryAccredit(email)
        .then((res) => {
          setLoading(false);
          Swal.fire("메일을 발송하였습니다!", "확인 버튼을 눌러 주세요!", "success");
        })
        .catch((err) => {
          Swal.fire({ icon: "error", title: "이메일 인증 실패", text: "유효하지 않은 이메일입니다!" });
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
        handleRegister={handleRegister}
        handleEmailAccredit={handleEmailAccredit}
        setAccredit={setAccredit}
        loading={loading}
      />
    </>
  );
};

export default RegisterContainer;
