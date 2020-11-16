import React from "react";
import "./ChangePosition.scss";
import Button from "../../common/Button";
import PaperCommentType from "../../../util/types/PaperComment";
import Draggable, { DraggableEventHandler } from "react-draggable";

interface ChangePositionProps {
  paperComments: PaperCommentType[];
  handleOnMove: DraggableEventHandler;
  onSubmit: () => void;
}

const ChangePosition = ({ paperComments, handleOnMove, onSubmit }: ChangePositionProps) => {
  return (
    <>
      <div className="position">
        <div className="position-box">
          <div className="position-box-title">원하는 위치에 글을 옮겨주세요</div>
          <div className="position-box-content">
            {paperComments.map((item: PaperCommentType, idx: number) => {
              return (
                <div style={{ transform: `translate(${item.location_x}px, ${item.location_y}px` }} key={idx}>
                  {item.image ? <img src={item.image} /> : <div>{item.comment}</div>}
                </div>
              );
            })}
            <Draggable bounds="parent" onStop={handleOnMove}>
              <div className="position-box-content-drag">Asdfsd</div>
            </Draggable>
          </div>
          <div className="position-box-btnarea">
            <Button onClick={() => onSubmit()} text="완료" style={{ height: "3.6rem", fontSize: "1.2rem" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePosition;
