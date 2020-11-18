import React from "react";
import "./CreatePaper.scss";
import Button from "../../common/Button/Button";
import { makeColor } from "../../../models/colorTemplate";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { RiImageAddLine } from "react-icons/ri";

interface CreatePaperProps {}

const CreatePaper = ({}: CreatePaperProps) => {
  return (
    <>
      <div className="create-paper">
        <div className="create-paper-box">
          <div className="create-paper-box-title">나만의 롤링페이퍼를 만들어보세요!</div>
          <div className="create-paper-box-content">
            <input className="create-paper-box-content-name" placeholder="제목" />
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
              <div className="create-paper-box-content-date-text">마감 시간</div>
              <span className="create-paper-box-content-date-subtext">다른 사용자가 글을 작성 할 수 있는 기간입니다.</span>
              <div className="create-paper-box-content-date-area">
                <DatePicker
                  style={{ borderRadius: "4px", border: "1px solid #dcdcdc", color: "#707070" }}
                  className="create-paper-box-content-date-area-input"
                  showTime
                />
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
            <div className="create-paper-box-content-thumbnail">
              <div className="create-paper-box-content-date-text">썸네일</div>
              <span className="create-paper-box-content-date-subtext">등록하지 않으면 기본 이미지로 자동 설정됩니다.</span>
              <div className="create-paper-box-content-thumbnail-content">
                <div className="create-paper-box-content-thumbnail-content-preview create-paper-box-content-thumbnail-content-preview-no">
                  <div className="create-paper-box-content-thumbnail-content-upload">
                    <label htmlFor="file">
                      <RiImageAddLine />
                    </label>
                    <input id="file" type="file" accept="image/png, image/jpeg" />
                  </div>
                </div>
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
