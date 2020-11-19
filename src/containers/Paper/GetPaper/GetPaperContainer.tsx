import React, { useCallback, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import GetPaper from "../../../components/Paper/GetPaper";
import useQuery from "../../../lib/hooks/useQuery";
import useStore from "../../../lib/hooks/useStore";
import { GetCommentsResponse, GetPaperResponse } from "../../../util/types/Response";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { toPng } from "html-to-image";

const GetPaperContainer = ({}) => {
  const { store } = useStore();
  const { userIdx } = store.AuthStore;
  const { handlePaperInfo, paperInfo, handleLikePaper, handlePaperDelete } = store.PaperStore;
  const { handlePaperComments, paperComments, initPaperComments, selectedIdx } = store.PaperCommentStore;

  const [loading, setLoading] = useState<boolean>(false);

  const [printImage, setPrintImage] = useState<string>("");

  const query = useQuery();
  const history = useHistory();
  const location = useLocation();

  const copyEl = useRef<HTMLTextAreaElement>(null);
  const canvasEl = useRef<HTMLDivElement>(null);

  const { search } = location;

  const handlePaperInfoCallback = useCallback(async () => {
    if (query.get("idx") || query.get("code")) {
      setLoading(true);
      handlePaperInfo(Number(query.get("idx")), query.get("code") || undefined)
        .then((res: GetPaperResponse) => {
          if (!res.data.Papers || !res.data.Papers.member) {
            history.push("/");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          history.push("/");
          setLoading(false);
        });
    } else {
      history.push("/");
    }
  }, [search]);

  const handlePaperDeleteCallback = useCallback(async () => {
    Swal.fire("경고", "정말로 삭제하시겠습니까?", "warning").then((value) => {
      if (value) {
        if (query.get("idx")) {
          handlePaperDelete(Number(query.get("idx")))
            .then((res: Response) => {
              Swal.fire("성공", "삭제되었습니다.", "success");
              history.push("/");
            })
            .catch((err) => {
              history.push("/");
            });
        }
      }
    });
  }, [search]);

  const handlePaperCommentsCallback = useCallback(async () => {
    if (query.get("idx")) {
      handlePaperComments(Number(query.get("idx")))
        .then((res: GetCommentsResponse) => {
          if (!res.data) {
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
          history.push("/");
        });
    }
  }, [search]);

  const handleLikePaperCallback = useCallback(async () => {
    if (query.get("idx")) {
      handleLikePaper(Number(query.get("idx")))
        .then((res: any) => {
          console.log(res);
          handlePaperInfoCallback();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const copy = useCallback(() => {
    if (copyEl.current) {
      copyEl.current.select();
      copyEl.current.setSelectionRange(0, 9999);
      document.execCommand("copy");
      Swal.fire("공유", "클립보드에 복사되었습니다", "success");
    }
  }, [copyEl]);

  const canvasElToSvg = useCallback(() => {
    if (canvasEl.current) {
      toPng(canvasEl.current)
        .then((dataUrl) => {
          setPrintImage(dataUrl);
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error);
        });
    }
  }, [canvasEl]);

  useEffect(() => {
    handlePaperInfoCallback();
  }, [handlePaperInfoCallback]);

  useEffect(() => {
    handlePaperCommentsCallback();
    return () => initPaperComments();
  }, [handlePaperCommentsCallback]);

  useEffect(() => {
    window.addEventListener("beforeprint", canvasElToSvg);
    return () => window.removeEventListener("beforeprint", canvasElToSvg);
  }, [canvasElToSvg]);

  return (
    <>
      <GetPaper
        canvasEl={canvasEl}
        userIdx={userIdx}
        paperInfo={paperInfo}
        paperComments={paperComments}
        handleLikePaperCallback={handleLikePaperCallback}
        selectedIdx={selectedIdx}
        copy={copy}
        handlePaperCommentsCallback={handlePaperCommentsCallback}
        printImage={printImage}
        handlePaperDeleteCallback={handlePaperDeleteCallback}
      />
      <textarea
        style={{ width: 0, height: 0 }}
        ref={copyEl}
        value={`${window.location.href}`}
        onChange={() => console.log("loaded")}
      />
    </>
  );
};

export default observer(GetPaperContainer);
