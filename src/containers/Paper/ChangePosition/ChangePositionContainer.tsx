import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePosition from "../../../components/Paper/ChangePosition";
import useStore from "../../../lib/hooks/useStore";
import useQuery from "../../../lib/hooks/useQuery";
import { useBeforeunload } from "react-beforeunload";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { DraggableData, DraggableEvent } from "react-draggable";
import Swal from "sweetalert2";

const ChangePositionContainer = ({}) => {
  const { store } = useStore();
  const { paperInfo } = store.PaperStore;
  const {
    color,
    font,
    comment,
    handlePaperComments,
    paperComments,
    handleLocationX,
    handleLocationY,
    imageUrl,
    modifyPaperComment,
    modifyIdx,
    createPaperComment
  } = store.PaperCommentStore;

  const history = useHistory();
  const { search } = useLocation();
  const query = useQuery();

  useBeforeunload((event: Event) => event.preventDefault());

  const handleOnMove = (e: DraggableEvent, data: DraggableData) => {
    handleLocationX(data.x);
    handleLocationY(data.y);
  };

  const handlePaperCommentsCallback = useCallback(() => {
    handlePaperComments(paperInfo!.idx)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        history.push("/");
      });
  }, [paperInfo]);

  const createPaperCommentCallBack = useCallback(async () => {
    await createPaperComment(Number(query.get("idx")!)).catch((err) => {
      if (err.message.indexOf("403")) {
        Swal.fire({ icon: "error", title: "글 작성 실패", text: "마감일을 초과하였습니다." });
      }
    });
  }, [search]);

  useEffect(() => {
    handlePaperCommentsCallback();
  }, [handlePaperCommentsCallback]);

  const onSubmit = useCallback(async () => {
    if (query.get("handleIdx")) {
      await modifyPaperComment(Number(query.get("handleIdx")));
    } else {
      await createPaperCommentCallBack();
    }
    handlePaperCommentsCallback();
    history.push(
      paperInfo?.scope === "ONLY_CODE" ? `/paper/?idx=${paperInfo.idx}&code=${paperInfo.code})}` : `/paper/?idx=${paperInfo?.idx}`
    );
  }, [search]);

  return (
    <>
      <ChangePosition
        paperComments={paperComments}
        handleOnMove={handleOnMove}
        onSubmit={onSubmit}
        color={color}
        font={font}
        comment={comment}
        imageUrl={imageUrl}
        modifyIdx={modifyIdx}
      />
    </>
  );
};

export default withRouter(observer(ChangePositionContainer));
