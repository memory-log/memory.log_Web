import React, { useCallback, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import WriteComment from "../../../components/Paper/WriteComment";
import { withRouter, useHistory, useLocation } from "react-router";
import useStore from "../../../lib/hooks/useStore";
import useQuery from "../../../lib/hooks/useQuery";
import { GetPaperResponse } from "../../../util/types/Response";
import { useBeforeunload } from "react-beforeunload";
import SignatureCanvas from "react-signature-canvas";

const WriteCommentContainer = ({}) => {
  const { store } = useStore();
  const { handlePaperInfo, paperInfo } = store.PaperStore;

  const { color, handleColor } = store.PaperCommentStore;
  const { write, handleWrite } = store.PaperCommentStore;
  const { font, handleFont } = store.PaperCommentStore;
  const { image, handleImage, uploadImage } = store.PaperCommentStore;
  const { handleComment } = store.PaperCommentStore;

  const [isPosition, setIsPosition] = useState<boolean>(false);

  const canvasEl = useRef<SignatureCanvas>(null);

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const query = useQuery();
  const history = useHistory();
  const { search } = useLocation();

  useBeforeunload((event: Event) => event.preventDefault());

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  const handlePaperInfoCallback = useCallback(() => {
    if (query.get("idx")) {
      handlePaperInfo(Number(query.get("idx")))
        .then((res: GetPaperResponse) => {
          if (!res.data.Papers || !res.data.Papers.member) {
            history.push("/");
          }
        })
        .catch(() => {
          history.push("/");
        });
    } else if (query.get("code")) {
      handlePaperInfo(undefined, query.get("code") || undefined)
        .then((res: GetPaperResponse) => {
          if (!res.data.Papers || !res.data.Papers.member) {
            history.push("/");
          }
        })
        .catch(() => {
          history.push("/");
        });
    } else {
      history.push("/");
    }
  }, [search]);

  const uploadImageCallback = useCallback(async () => {
    await uploadImage().then((res: any) => {
      console.log(res);
    });
  }, []);

  const nextPosition = useCallback(() => {
    if (canvasEl.current) {
      const blobBin = atob(canvasEl.current.toDataURL().split(",")[1]);
      const array = [];
      for (let i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
      }
      const file = new Blob([new Uint8Array(array)], { type: "image/png" });

      handleImage(new File([file], "file.png", { lastModified: new Date().getTime(), type: file.type }));
      uploadImageCallback();
    }
    setIsPosition(true);
  }, [canvasEl, uploadImageCallback]);

  useEffect(() => {
    handlePaperInfoCallback();
  }, [handlePaperInfoCallback]);

  return (
    <>
      <WriteComment
        isPosition={isPosition}
        setIsPosition={setIsPosition}
        paperInfo={paperInfo}
        handleImageChange={handleImageChange}
        preview={preview}
        color={color}
        handleColor={handleColor}
        write={write}
        handleWrite={handleWrite}
        font={font}
        handleFont={handleFont}
        handleComment={handleComment}
        canvasEl={canvasEl}
        nextPosition={nextPosition}
      />
    </>
  );
};

export default withRouter(observer(WriteCommentContainer));
