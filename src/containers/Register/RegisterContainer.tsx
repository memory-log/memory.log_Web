import React, { useCallback, useState } from "react";
import Register from "../../components/Register";
import { useHistory } from "react-router-dom";
import useStore from "../../lib/hooks/useStore";
import Swal from "sweetalert2";

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
      Swal.fire({ icon: "error", title: "빈칸을 입력", text: "빈칸을 입력해 주세요!" });
      console.log("빈칸을 입력해 주세요");
    } else if (pw !== checkPw) {
      Swal.fire({ icon: "error", title: "비밀번호", text: "비밀번호가 맞는지 확인해 주세요!" });
    } else if (accredit === false) {
      Swal.fire({ icon: "error", title: "메일 인증", text: "메일 인증을 하였는지 다시 확인해 주세요" });
    } else {
      tryRegister(email, name, pw)
        .then((res) => {
          console.log("가입성공");
          Swal.fire("가입 성공!", "확인 버튼을 눌러 주세요!", "success");
          changePage();
        })
        .catch((err) => {
          Swal.fire({ icon: "error", title: "가입 실패", text: "이미 있는 메일인지 확인해 주세요" });
        });
    }
  }, [email, pw, name, accredit, checkPw]);

  const emailAccredit = () => {
    if (!email) {
    } else {
      tryAccredit(email)
        .then((res) => {
          Swal.fire("메일을 발송하였습니다!", "확인 버튼을 눌러 주세요!", "success");
        })
        .catch((err) => {
          Swal.fire({ icon: "error", title: "메일 발송을 실패하였습니다 ㅠㅠ", text: "메일이 맞는지 확인해 주세요" });
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
