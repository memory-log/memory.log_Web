import React from "react";
import "./MainNotFound.scss";
import { ReactComponent as Paper } from "../../../assets/images/paper.svg";
import { ReactComponent as Shadow } from "../../../assets/images/shadow.svg";

interface MainNotFoundProps {
  login: boolean;
  showModal: () => void;
  toCreate: () => void;
}

const MainNotFound = ({ login, showModal, toCreate }: MainNotFoundProps) => {
  return (
    <>
      <div className="Main-NotFound">
        <div className="Main-NotFound-Image">
          <Paper className="Main-NotFound-Image-Paper" />
          <Shadow className="Main-NotFound-Image-Shadow" />
        </div>
        <p className="Main-NotFound-Title">이런! 롤링페이퍼가 없네요 😅</p>
        <p className="Main-NotFound-Subtitle">어서 작성해보세요!</p>
        <button
          className="Main-NotFound-Button"
          onClick={() => {
            login ? toCreate() : showModal();
          }}
        >
          작성하기
        </button>
      </div>
    </>
  );
};

export default MainNotFound;
