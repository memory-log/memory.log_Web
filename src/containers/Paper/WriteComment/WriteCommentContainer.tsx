import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteComment from "../../../components/Paper/WriteComment";
import { withRouter, useHistory, useLocation } from "react-router";
import useStore from "../../../lib/hooks/useStore";
import useQuery from "../../../lib/hooks/useQuery";
import { GetPaperResponse } from "../../../util/types/Response";
import { useBeforeunload } from "react-beforeunload";

const WriteCommentContainer = ({}) => {
  const { store } = useStore();
  const { handlePaperInfo, paperInfo } = store.PaperStore;

  const [color, setColor] = useState("#707070");
  const [write, setWrite] = useState("text");
  const [font, setFont] = useState("NotoSansKR");

  const [isPosition, setIsPosition] = useState<boolean>(false);

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
        setColor={setColor}
        color={color}
        write={write}
        setWrite={setWrite}
        font={font}
        setFont={setFont}
      />
    </>
  );
};

export default withRouter(observer(WriteCommentContainer));
