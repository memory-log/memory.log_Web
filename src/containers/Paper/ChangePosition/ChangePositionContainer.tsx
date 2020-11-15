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

  const history = useHistory();

  const [locationX, setLocationX] = useState<number>(0);
  const [locationY, setLocationY] = useState<number>(0);

  useBeforeunload((event: Event) => event.preventDefault());

  const handleOnMove = (e: DraggableEvent, data: DraggableData) => {
    setLocationX(data.x);
    setLocationY(data.y);
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
      <ChangePosition paperComments={paperComments} handleOnMove={handleOnMove} onSubmit={onSubmit} />
    </>
  );
};

export default withRouter(observer(ChangePositionContainer));
