import React from "react";
import "./CreatePaper.scss";
import Button from "../../common/Button/Button";
import { makeColor } from "../../../models/colorTemplate";

interface CreatePaperProps {}

const CreatePaper = ({}: CreatePaperProps) => {
  return (
    <>
      <div className="create-paper">
        <div className="create-paper-box">
          <div className="create-paper-box-title">나만의 롤링페이퍼를 만들어보세요!</div>
          <div className="create-paper-box-content">
            <input className="create-paper-box-content-name" placeholder="제목" />
            <input className="create-paper-box-content-info" placeholder="설명" />
            <div className="create-paper-box-content-range">
              <div className="create-paper-box-content-range-text">공개범위</div>
              <div className="create-paper-box-content-range-area">
                <label className="create-paper-box-content-range-area-select">
                  전체공개
                  <input type="radio" name="range" />
                  <span className="create-paper-box-content-range-area-select-radio" />
                </label>
                <label className="create-paper-box-content-range-area-select">
                  일부공개
                  <input type="radio" name="range" />
                  <span className="create-paper-box-content-range-area-select-radio" />
                </label>
                <label className="create-paper-box-content-range-area-select">
                  나만보기
                  <input type="radio" name="range" />
                  <span className="create-paper-box-content-range-area-select-radio" />
                </label>
              </div>
            </div>
            <div className="create-paper-box-content-date">
              <div className="create-paper-box-content-date-text">기간</div>
              <div className="create-paper-box-content-date-area">
                <input className="create-paper-box-content-date-area-input" type="date"></input>
                <div className="create-paper-box-content-date-area-wave"> ~ </div>
                <input className="create-paper-box-content-date-area-input" type="date"></input>
              </div>
            </div>
            <div className="create-paper-box-content-backcolor">
              <div className="create-paper-box-content-backcolor-text">배경색</div>
              <div className="create-paper-box-content-backcolor-area">
                {makeColor.map((color: string, index: number) => (
                  <div className="create-paper-box-content-backcolor-area-color" key={index} style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </div>
          <div className="create-paper-box-btnarea">
            <Button text="롤링페이퍼 만들기" style={{ height: "3.6rem", fontSize: "1.2rem" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePaper;
