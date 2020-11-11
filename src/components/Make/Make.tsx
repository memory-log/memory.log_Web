import React from "react";
import "./Make.scss";
import Button from "../common/Button/Button";
import { makeColor } from "../../models/colorTemplate";

interface MakeProps {}

const Make = ({}: MakeProps) => {
  return (
    <>
      <div className="make">
        <div className="make-box">
          <div className="make-box-title">나만의 롤링페이퍼를 만들어보세요!</div>
          <div className="make-box-content">
            <input className="make-box-content-name" placeholder="제목" />
            <input className="make-box-content-info" placeholder="설명" />
            <div className="make-box-content-range">
              <div className="make-box-content-range-text">공개범위</div>
              <div className="make-box-content-range-area">
                <label className="make-box-content-range-area-select">
                  전체공개
                  <input type="radio" name="range" />
                  <span className="make-box-content-range-area-select-radio" />
                </label>
                <label className="make-box-content-range-area-select">
                  일부공개
                  <input type="radio" name="range" />
                  <span className="make-box-content-range-area-select-radio" />
                </label>
                <label className="make-box-content-range-area-select">
                  나만보기
                  <input type="radio" name="range" />
                  <span className="make-box-content-range-area-select-radio" />
                </label>
              </div>
            </div>
            <div className="make-box-content-date">
              <div className="make-box-content-date-text">기간</div>
              <div className="make-box-content-date-area">
                <input className="make-box-content-date-area-input" type="date"></input>
                <div className="make-box-content-date-area-wave"> ~ </div>
                <input className="make-box-content-date-area-input" type="date"></input>
              </div>
            </div>
            <div className="make-box-content-backcolor">
              <div className="make-box-content-backcolor-text">배경색</div>
              <div className="make-box-content-backcolor-area">
                {makeColor.map((color: string, index: number) => (
                  <div className="make-box-content-backcolor-area-color" key={index} style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </div>
          <div className="make-box-btnarea">
            <Button text="롤링페이퍼 만들기" style={{ width: "35rem", height: "3.6rem" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Make;
