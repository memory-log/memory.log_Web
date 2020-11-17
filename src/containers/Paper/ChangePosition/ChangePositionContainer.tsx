import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePosition from "../../../components/Paper/ChangePosition";
import useStore from "../../../lib/hooks/useStore";
import { useBeforeunload } from "react-beforeunload";
import { useHistory, withRouter } from "react-router-dom";
import { DraggableData, DraggableEvent } from "react-draggable";

const ChangePositionContainer = ({}) => {
  const { store } = useStore();
  const { paperInfo } = store.PaperStore;
  const { handlePaperComments, paperComments } = store.PaperCommentStore;
  const { color } = store.PaperCommentStore;
  const { write } = store.PaperCommentStore;
  const { font } = store.PaperCommentStore;
  const { comment } = store.PaperCommentStore;
  const { locationX, handleLocationX } = store.PaperCommentStore;
  const { locationY, handleLocationY } = store.PaperCommentStore;
  const { imageUrl, handleImageUrl } = store.PaperCommentStore;

  const history = useHistory();

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

  useEffect(() => {
    handlePaperCommentsCallback();
  }, [handlePaperCommentsCallback]);

  const onSubmit = useCallback(() => {
    console.log(locationX, locationY);
  }, [locationX, locationY]);

  return (
    <>
      <ChangePosition
        paperComments={paperComments}
        handleOnMove={handleOnMove}
        onSubmit={onSubmit}
        color={color}
        font={font}
        write={write}
        comment={comment}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default withRouter(observer(ChangePositionContainer));
