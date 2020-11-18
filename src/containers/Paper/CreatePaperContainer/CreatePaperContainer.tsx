import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react";
import CreatePaper from "../../../components/Paper/CreatePaper";
import useStore from "../../../lib/hooks/useStore";
import { CreatePaperResponse, UploadImageResponse } from "../../../util/types/Response";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const CreatePaperContainer = ({}) => {
  const history = useHistory();
  const { store } = useStore();
  const { handleCreatePaper, handlePaperImage } = store.PaperStore;

  const [endTime, setEndTime] = useState<Date>(new Date());
  const [scope, setScope] = useState<string>("PUBLIC");
  const [title, setTitle] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
  const [thumbnail, setThumbnail] = useState<File>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const handleCreatePaperCallback = useCallback(async () => {
    let fileName: string = "";
    if (thumbnail) {
      await handlePaperImage(thumbnail)
        .then((res: UploadImageResponse) => {
          fileName = res.data.fileName;
          console.log("파일 등록 성공", fileName);
        })
        .catch((err: Error) => {
          Swal.fire({ icon: "error", title: "사진등록 실패", text: "파일 이름에 특수기호 여부를 확인해 주세요." });
        });
    }
    await handleCreatePaper(endTime, scope, title, backgroundColor, fileName)
      .then((res: CreatePaperResponse) => {
        console.log(res);
        history.push(
          res.data.Paper.scope === "ONLY_CODE"
            ? `/paper?idx=${res.data.Paper.idx}&code=${res.data.Paper.code}`
            : `/paper?idx=${res.data.Paper.idx}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [thumbnail, endTime, scope, title, backgroundColor]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      setThumbnail(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  return (
    <>
      <CreatePaper
        preview={preview}
        setScope={setScope}
        setTitle={setTitle}
        setEndTime={setEndTime}
        setBackgroundColor={setBackgroundColor}
        handleImageChange={handleImageChange}
        handleCreatePaperCallback={handleCreatePaperCallback}
      />
    </>
  );
};

export default observer(CreatePaperContainer);
