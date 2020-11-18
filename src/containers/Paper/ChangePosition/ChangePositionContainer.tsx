import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePosition from "../../../components/Paper/ChangePosition";
import useStore from "../../../lib/hooks/useStore";
import useQuery from "../../../lib/hooks/useQuery";
import { useBeforeunload } from "react-beforeunload";
import { useHistory, withRouter } from "react-router-dom";
import { DraggableData, DraggableEvent } from "react-draggable";
import Swal from "sweetalert2";

const ChangePositionContainer = ({}) => {
  const { store } = useStore();
  const { paperInfo } = store.PaperStore;
  const { handlePaperComments, paperComments } = store.PaperCommentStore;
  const { color } = store.PaperCommentStore;
  const { font } = store.PaperCommentStore;
  const { comment } = store.PaperCommentStore;
  const { locationX, handleLocationX } = store.PaperCommentStore;
  const { locationY, handleLocationY } = store.PaperCommentStore;
  const { image, imageUrl, handleImageUrl } = store.PaperCommentStore;
  const { createPaperComment } = store.PaperCommentStore;

  const history = useHistory();
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

  const createPaperCommentCallBack = useCallback(() => {
    createPaperComment(color, comment, font, imageUrl, locationX, locationY, Number(query.get("idx")!)).catch((err) => {
      if (err.message.indexOf("403")) {
        Swal.fire({ icon: "error", title: "글 작성 실패", text: "마감일을 초과하였습니다." });
      }
    });
  }, [color, comment, font, imageUrl, locationX, locationY]);

  useEffect(() => {
    handlePaperCommentsCallback();
  }, [handlePaperCommentsCallback]);

  const onSubmit = useCallback(() => {
    createPaperCommentCallBack();
    history.push(
      query.get("code")
        ? `/paper/?idx=${Number(query.get("idx"))}&code=${Number(query.get("code"))}`
        : `/paper/?idx=${Number(query.get("idx"))}`
    );
    handlePaperCommentsCallback();
  }, [color, comment, font, imageUrl, locationX, locationY]);

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
      />
    </>
  );
};

export default withRouter(observer(ChangePositionContainer));
