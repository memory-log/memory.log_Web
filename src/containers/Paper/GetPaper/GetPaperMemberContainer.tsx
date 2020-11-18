import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import GetPaperMember from "../../../components/Paper/GetPaper/GetPaperMember/GetPaperMember";
import PaperCommentType from "../../../util/types/PaperComment";
import { useHistory, withRouter } from "react-router-dom";
import useStore from "../../../lib/hooks/useStore";

interface GetPaperMemberContainerProps {
  item: PaperCommentType;
  handlePaperCommentsCallback: () => Promise<void>;
}

const GetPaperMemberContainer = ({ item, handlePaperCommentsCallback }: GetPaperMemberContainerProps) => {
  const [hide, setHide] = useState<boolean>(false);
  const { store } = useStore();

  const { userIdx } = store.AuthStore;
  const { handleSelectedIdx, selectedIdx } = store.PaperCommentStore;
  const { deleteIdx, handleDeleteIdx, handleDeletePaperComment } = store.PaperCommentStore;

  const history = useHistory();

  const handleDeletePaperCommentCallback = useCallback(async (deleteIdx: number) => {
    handleDeleteIdx(deleteIdx);
    await handleDeletePaperComment(deleteIdx)
      .then((res: any) => {
        handlePaperCommentsCallback();
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const close = useCallback(() => {
    if (hide) {
      setHide(false);
    }
  }, [hide]);

  const onModify = () => {
    history.push(`/write?handleIdx=${item.idx}`);
  };

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [close]);

  return (
    <>
      <GetPaperMember
        selectedIdx={selectedIdx}
        handleSelectedIdx={handleSelectedIdx}
        item={item}
        hide={hide}
        setHide={setHide}
        onModify={onModify}
        userIdx={userIdx}
        handleDeleteIdx={handleDeleteIdx}
        handleDeletePaperCommentCallback={handleDeletePaperCommentCallback}
      />
    </>
  );
};

export default observer(GetPaperMemberContainer);
