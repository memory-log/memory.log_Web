import React, { useCallback, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import WriteComment from "../../../components/Paper/WriteComment";
import { withRouter, useHistory, useLocation } from "react-router";
import useStore from "../../../lib/hooks/useStore";
import useQuery from "../../../lib/hooks/useQuery";
import { GetPaperResponse, GetCommentResponse } from "../../../util/types/Response";
import { useBeforeunload } from "react-beforeunload";
import SignatureCanvas from "react-signature-canvas";
import generateURL from "../../../lib/generateURL";

const WriteCommentContainer = ({}) => {
  const { store } = useStore();
  const { handlePaperInfo, paperInfo, handleGetPaperInfo } = store.PaperStore;

  const {
    handleColor,
    handleImage,
    uploadImage,
    handleComment,
    handleWrite,
    handleFont,
    getComment,
    handleImageUrl,
    modifyIdx,
    handleModifyIdx
  } = store.PaperCommentStore;

  const [isPosition, setIsPosition] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [image, setImage] = useState<File | Blob | null>();
  const [font, setFont] = useState<string>("NotoSansKR");
  const [color, setColor] = useState<string>("#707070");
  const [write, setWrite] = useState<string>("text");

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
        setImage(file);
        uploadImage();
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  const handlePaperInfoCallback = useCallback(async () => {
    if (query.get("handleIdx")) {
      handleModifyIdx(Number(query.get("handleIdx")));
      await getComment(Number(query.get("handleIdx")))
        .then((res) => {
          if (!res.data.paperComment.comment) {
            setWrite("image");
          }
          handleGetPaperInfo(res.data.paperComment.paper);
          setComment(res.data.paperComment.comment || "");
          setColor(res.data.paperComment.color || "#707070");
          setFont(res.data.paperComment.fontFamily || "NotoSansKR");
          setPreview(res.data.paperComment.image ? generateURL(res.data.paperComment.image) : "");
        })
        .catch(() => {
          history.push("/");
        });
    } else if (query.get("code") && query.get("idx")) {
      handlePaperInfo(Number(query.get("idx")), query.get("code")!)
        .then((res: GetPaperResponse) => {
          if (!res.data.Papers || !res.data.Papers.member) {
            history.push("/");
          }
        })
        .catch(() => {
          history.push("/");
        });
    } else if (query.get("idx")) {
      handlePaperInfo(Number(query.get("idx")))
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
    if (write === "text") {
      handleImageUrl("");
    }
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
  }, [canvasEl, uploadImageCallback, write]);

  useEffect(() => {
    handlePaperInfoCallback();
  }, [handlePaperInfoCallback]);

  useEffect(() => {
    handleComment(comment);
    handleFont(font);
    handleColor(color);
    handleWrite(write);
    if (image) {
      handleImage(image);
    }
  }, [comment, font, color, image, write]);

  useEffect(() => {
    return () => {
      handleModifyIdx(undefined);
      handleColor("#707070");
      handleWrite("text");
      handleFont("NotoSansKR");
      handleImageUrl("");
      handleComment("");
    };
  }, []);

  return (
    <>
      <WriteComment
        isPosition={isPosition}
        paperInfo={paperInfo}
        handleImageChange={handleImageChange}
        preview={preview}
        color={color}
        setColor={setColor}
        write={write}
        setWrite={setWrite}
        font={font}
        setFont={setFont}
        comment={comment}
        setComment={setComment}
        canvasEl={canvasEl}
        nextPosition={nextPosition}
      />
    </>
  );
};

export default withRouter(observer(WriteCommentContainer));
