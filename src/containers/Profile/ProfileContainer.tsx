import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Profile from "../../components/Profile/Profile";
import useStore from "../../lib/hooks/useStore";
import { ModifyProfileImgResponse, Response, GetMyInfoResponse } from "../../util/types/Response";
import Swal from "sweetalert2";
import useQuery from "../../lib/hooks/useQuery";
import { useHistory } from "react-router-dom";

const ProfileContainer = ({}) => {
  const { store } = useStore();
  const { name, email, getInfo } = store.AuthStore;
  const { modify, handleModifyProfile, tryProfileModify, closeModify, handleModifyProfileImg } = store.ModifyStore;

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");
  const query = useQuery();

  const history = useHistory();

  const [changeName, setChangeName] = useState<string>(name);
  const [getProfileImg, setGetProfileImg] = useState<File>();
  const [profileImg, setProfileImg] = useState<string>("");
  const [idxFact, setIdxFact] = useState<boolean>(false);

  const handleModifyProfileCallback = useCallback(async () => {
    let fileName: string = "";
    if (getProfileImg) {
      await handleModifyProfileImg(getProfileImg)
        .then((res: ModifyProfileImgResponse) => {
          fileName = res.data.fileName;
          console.log("파일 등록 성공");
        })
        .catch((err: Error) => {
          Swal.fire({ icon: "error", title: "사진등록 실패", text: "파일 이름에 특수기호 여부를 확인해 주세요." });
        });
    }
    await handleModifyProfile(changeName, fileName || undefined)
      .then((res: Response) => {
        handleGetInfo();
      })
      .catch((err: Error) => {
        console.log("에러");
      });
  }, [changeName, getProfileImg, name]);

  const handlerGetInfo = useCallback(() => {
    if (query.get("idx")) {
      getInfo(Number(query.get("idx")))
        .then((res: GetMyInfoResponse) => {
          setProfileImg(res.data.profileImage);
          setIdxFact(true);
        })
        .catch((err: Error) => console.log(err));
    } else {
      getInfo()
        .then((res: GetMyInfoResponse) => {
          setProfileImg(res.data.profileImage);
          setIdxFact(false);
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      setGetProfileImg(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      console.log(reader.readAsDataURL(file));
    } else {
      setPreview("");
    }
  };

  const goMain = () => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/");
    }
  };

  const handleGetInfo = useCallback(async () => {
    await getInfo()
      .then((res: Response) => {
        console.log("성공");
        console.log(name);
      })
      .catch((err: Error) => {
        console.log("실패");
      });
  }, [name]);

  useEffect(() => {
    handlerGetInfo();
  }, [handlerGetInfo]);

  useEffect(() => {
    setChangeName(name);
  }, [name]);

  useEffect(() => {
    handleGetInfo();
    return () => closeModify();
  }, []);

  useEffect(() => {
    handlerGetInfo();
    console.log("idx여부" + idxFact);
  }, [idxFact]);

  useEffect(() => {
    goMain();
  }, []);

  return (
    <>
      <Profile
        name={name}
        email={email}
        modify={modify}
        changeName={changeName}
        setChangeName={setChangeName}
        tryProfileModify={tryProfileModify}
        handleModifyProfileCallback={handleModifyProfileCallback}
        handleImageChange={handleImageChange}
        profileImg={profileImg}
        preview={preview}
        idxFact={idxFact}
      />
    </>
  );
};

export default observer(ProfileContainer);
