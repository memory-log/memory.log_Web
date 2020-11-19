import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react";
import CreatePaper from "../../../components/Paper/CreatePaper";
import useStore from "../../../lib/hooks/useStore";
import { CreatePaperResponse, GetPaperResponse, UploadImageResponse } from "../../../util/types/Response";
import Swal from "sweetalert2";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import useQuery from "../../../lib/hooks/useQuery";
import generateURL from "../../../lib/generateURL";

const CreatePaperContainer = ({}) => {
  const history = useHistory();
  const { store } = useStore();
  const { userIdx } = store.AuthStore;
  const { handleCreatePaper, handlePaperImage, handlePaperInfo, handleModifyPaper } = store.PaperStore;

  const [endTime, setEndTime] = useState<Date>(new Date());
  const [scope, setScope] = useState<string>("PUBLIC");
  const [title, setTitle] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [thumbnail, setThumbnail] = useState<File>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const query = useQuery();
  const { search } = useLocation();

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

  const handleModifyPaperCallback = useCallback(async () => {
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
    await handleModifyPaper(Number(query.get("idx")), endTime, scope, title, backgroundColor, fileName)
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

  const handleComplete = useCallback(() => {
    if (query.get("idx")) {
      handleModifyPaperCallback();
    } else {
      handleCreatePaperCallback();
    }
  }, [handleCreatePaperCallback, handleModifyPaperCallback]);

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

  const handlePaperInfoCallback = useCallback(
    async (idx?: number, code?: string) => {
      await handlePaperInfo(Number(query.get("idx")), query.get("code")!)
        .then((res: GetPaperResponse) => {
          setTitle(res.data.Papers.title);
          setScope(res.data.Papers.scope);
          setEndTime(res.data.Papers.endTime);
          setBackgroundColor(res.data.Papers.backgroundColor);
          setPreview(res.data.Papers.thumbnail ? generateURL(res.data.Papers.thumbnail) : null);

          if (userIdx && userIdx !== res.data.Papers.member.idx) {
            history.push("/");
          }
        })
        .catch(() => {
          history.push("/");
        });
    },
    [search, userIdx]
  );

  const handleGetPostInfoCallback = useCallback(async () => {
    if (query.get("idx") && query.get("code")) {
      await handlePaperInfoCallback(Number(query.get("idx")), query.get("code")!);
    } else if (query.get("idx")) {
      handlePaperInfoCallback(Number(query.get("idx")));
    }
  }, [search, handlePaperInfoCallback]);

  useEffect(() => {
    handleGetPostInfoCallback();
  }, [handleGetPostInfoCallback]);

  return (
    <>
      <CreatePaper
        title={title}
        scope={scope}
        endTime={endTime}
        preview={preview}
        setScope={setScope}
        setTitle={setTitle}
        setEndTime={setEndTime}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        handleImageChange={handleImageChange}
        handleComplete={handleComplete}
      />
    </>
  );
};

export default withRouter(observer(CreatePaperContainer));
