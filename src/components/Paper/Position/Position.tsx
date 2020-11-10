import React from "react";
import "./Position.scss";
import Button from "../../common/Button";

interface PositionProps {}

const Position = ({}: PositionProps) => {
  return (
    <>
      <div className="position">
        <div className="position-box">
          <div className="position-box-title">원하는 위치에 글을 옮겨주세요</div>
          <div className="position-box-content"></div>
          <div className="position-box-btnarea">
            <Button text="완료" style={{ width: "35rem", height: "3.6rem" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
