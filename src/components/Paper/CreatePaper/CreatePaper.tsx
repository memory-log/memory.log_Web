import React from "react";
import "./CreatePaper.scss";
import Button from "../../common/Button/Button";
import { makeColor } from "../../../models/colorTemplate";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { RiImageAddLine } from "react-icons/ri";
import moment from "moment";

interface CreatePaperProps {
  scope: string;
  title: string;
  endTime: Date;
  preview: string | ArrayBuffer | null;
  backgroundColor: string;
  setScope: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date>>;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleComplete: () => void;
}

const CreatePaper = ({
  preview,
  title,
  scope,
  endTime,
  backgroundColor,
  setScope,
  setTitle,
  setEndTime,
  setBackgroundColor,
  handleImageChange,
  handleComplete
}: CreatePaperProps) => {
  return (
    <>
      <div className="create-paper">
        <div className="create-paper-box">
          <div className="create-paper-box-title">나만의 롤링페이퍼를 만들어보세요!</div>
          <div className="create-paper-box-content">
            <input
              className="create-paper-box-content-name"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="create-paper-box-content-range">
              <div className="create-paper-box-content-range-text">공개범위</div>
              <div className="create-paper-box-content-range-area">
                <label className="create-paper-box-content-range-area-select" onClick={() => setScope("PUBLIC")}>
                  전체공개
                  <input type="radio" name="range" checked={scope === "PUBLIC"} onChange={(e) => setScope(e.target.value)} />
                  <span className="create-paper-box-content-range-area-select-radio" />
                </label>
                <label className="create-paper-box-content-range-area-select" onClick={() => setScope("ONLY_CODE")}>
                  일부공개
                  <input type="radio" name="range" checked={scope === "ONLY_CODE"} onChange={(e) => setScope(e.target.value)} />
                  <span className="create-paper-box-content-range-area-select-radio" />
                </label>
                <label className="create-paper-box-content-range-area-select" onClick={() => setScope("PRIVATE")}>
                  나만보기
                  <input type="radio" name="range" checked={scope === "PRIVATE"} onChange={(e) => setScope(e.target.value)} />
                  <span className="create-paper-box-content-range-area-select-radio" />
                </label>
              </div>
            </div>
            <div className="create-paper-box-content-date">
              <div className="create-paper-box-content-date-text">마감 시간</div>
              <span className="create-paper-box-content-date-subtext">다른 사용자가 글을 작성 할 수 있는 기간입니다.</span>
              <div className="create-paper-box-content-date-area">
                <DatePicker
                  defaultValue={moment(endTime)}
                  style={{ borderRadius: "4px", border: "1px solid #dcdcdc", color: "#707070" }}
                  className="create-paper-box-content-date-area-input"
                  showTime
                  onChange={(value, dateString) => setEndTime(new Date(dateString))}
                />
              </div>
            </div>
            <div className="create-paper-box-content-backcolor">
              <div className="create-paper-box-content-backcolor-text">배경색</div>
              <div className="create-paper-box-content-backcolor-area">
                {makeColor.map((color: string, index: number) => (
                  <div
                    className="create-paper-box-content-backcolor-area-color"
                    key={index}
                    style={{ backgroundColor: color, border: color === backgroundColor ? "2px solid black" : "" }}
                    onClick={() => setBackgroundColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="create-paper-box-content-thumbnail">
              <div className="create-paper-box-content-date-text">썸네일</div>
              <span className="create-paper-box-content-date-subtext">등록하지 않으면 기본 이미지로 자동 설정됩니다.</span>
              <div className="create-paper-box-content-thumbnail-content">
                <div
                  className={
                    preview
                      ? "create-paper-box-content-thumbnail-content-preview"
                      : "create-paper-box-content-thumbnail-content-preview create-paper-box-content-thumbnail-content-preview-no"
                  }
                >
                  {preview && <img src={preview.toString()} className="create-paper-box-content-thumbnail-content-preview" />}
                  <div className="create-paper-box-content-thumbnail-content-upload">
                    <label htmlFor="file">
                      <RiImageAddLine />
                    </label>
                    <input id="file" type="file" accept="image/png, image/jpeg" onChange={(e) => handleImageChange(e)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="create-paper-box-btnarea">
            <Button text="롤링페이퍼 만들기" style={{ height: "3.6rem", fontSize: "1.2rem" }} onClick={() => handleComplete()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePaper;
