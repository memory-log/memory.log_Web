import React from "react";
import "./WriteComment.scss";
import { FiPlus } from "react-icons/fi";
import { writeColor } from "../../../models/colorTemplate";
import Button from "../../common/Button/Button";
import SignatureCanvas from "react-signature-canvas";
import { Link } from "react-router-dom";
import PaperType from "../../../util/types/Paper";
import ChangePositionContainer from "../../../containers/Paper/ChangePosition/ChangePositionContainer";

interface WriteCommentProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview: string | ArrayBuffer | null;
  color: string;
  handleColor: (color: string) => void;
  write: string;
  handleWrite: (write: string) => void;
  font: string;
  handleFont: (font: string) => void;
  paperInfo?: PaperType;
  isPosition: boolean;
  setIsPosition: React.Dispatch<React.SetStateAction<boolean>>;
  handleComment: (comment: string) => void;
  canvasEl: React.RefObject<SignatureCanvas>;
  nextPosition: () => void;
}

const WriteComment = ({
  handleImageChange,
  preview,
  color,
  handleColor,
  write,
  handleWrite,
  font,
  handleFont,
  paperInfo,
  isPosition,
  setIsPosition,
  handleComment,
  canvasEl,
  nextPosition
}: WriteCommentProps) => {
  return (
    <>
      {isPosition ? (
        <>
          <ChangePositionContainer />
        </>
      ) : (
        <>
          {paperInfo && paperInfo.member ? (
            <div className="write">
              <div className="write-box">
                <div className="write-box-title">{paperInfo.member.name}님께 전달할 말을 적어주세요.</div>
                <div className="write-box-way">
                  <div className="write-box-way-text">작성방법</div>
                  <div className="write-box-way-area">
                    <label className="write-box-way-area-select">
                      텍스트
                      <input
                        type="radio"
                        name="way"
                        value="text"
                        checked={write === "text"}
                        onChange={(e) => handleWrite(e.target.value)}
                      />
                      <span className="write-box-way-area-select-radio" />
                    </label>
                    <label className="write-box-way-area-select">
                      이미지
                      <input
                        type="radio"
                        name="way"
                        value="image"
                        checked={write === "image"}
                        onChange={(e) => handleWrite(e.target.value)}
                      />
                      <span className="write-box-way-area-select-radio" />
                    </label>
                    <label className="write-box-way-area-select">
                      손글씨
                      <input
                        type="radio"
                        name="way"
                        value="hand"
                        checked={write === "hand"}
                        onChange={(e) => handleWrite(e.target.value)}
                      />
                      <span className="write-box-way-area-select-radio" />
                    </label>
                  </div>
                </div>
                {write === "text" ? (
                  <div className="write-box-way">
                    <div className="write-box-way-text">폰트</div>
                    <div className="write-box-way-area">
                      <label className="write-box-way-area-select">
                        NotoSans
                        <input
                          type="radio"
                          name="font"
                          value="NotoSansKR"
                          checked={font === "NotoSansKR"}
                          onChange={(e) => handleFont(e.target.value)}
                        />
                        <span className="write-box-way-area-select-radio" />
                      </label>
                      <label className="write-box-way-area-select">
                        휴먼편지체
                        <input
                          type="radio"
                          name="font"
                          value="휴먼편지체"
                          checked={font === "휴먼편지체"}
                          onChange={(e) => handleFont(e.target.value)}
                        />
                        <span className="write-box-way-area-select-radio" />
                      </label>
                      <label className="write-box-way-area-select">
                        나눔스퀘어
                        <input
                          type="radio"
                          name="font"
                          value="나눔스퀘어_ac"
                          checked={font === "나눔스퀘어_ac"}
                          onChange={(e) => handleFont(e.target.value)}
                        />
                        <span className="write-box-way-area-select-radio" />
                      </label>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {write === "image" ? (
                  ""
                ) : (
                  <div className="write-box-color">
                    <div className="write-box-color-name">글자색</div>
                    <div className="write-box-color-area">
                      {writeColor.map((color: string, index: number) => (
                        <div
                          key={index}
                          style={{ backgroundColor: color, cursor: "pointer" }}
                          onClick={() => handleColor(color)}
                        />
                      ))}
                      <label htmlFor="write-color-picker">
                        <input
                          id="write-color-picker"
                          className="write-box-color-area-picker"
                          type="color"
                          onChange={(e) => handleColor(e.target.value)}
                        />
                        <FiPlus />
                      </label>
                    </div>
                  </div>
                )}

                <div className="write-box-writing">
                  {write === "text" ? (
                    <textarea
                      autoFocus
                      className="write-box-textbox"
                      placeholder="글을 작성해주세요."
                      style={{ color: color, fontFamily: font }}
                      onChange={(e) => handleComment(e.target.value)}
                    />
                  ) : write === "image" ? (
                    <div className="write-box-writing-profile">
                      <label htmlFor="file">파일 업로드</label>
                      <input onChange={handleImageChange} id="file" type="file" accept="image/png, image/jpeg" />
                      {preview ? (
                        <img src={preview.toString()} className="write-box-writing-profile-preview" />
                      ) : (
                        <div className="write-box-writing-profile-preview">미리보기</div>
                      )}
                    </div>
                  ) : (
                    <SignatureCanvas ref={canvasEl} penColor={color} canvasProps={{ className: "write-box-writing-sigCanvas" }} />
                  )}
                </div>

                <div className="write-box-btnarea">
                  <Button text="다음" style={{ height: "3.6rem", fontSize: "1.2rem" }} onClick={() => nextPosition()} />
                </div>
              </div>
            </div>
          ) : (
            <div>loading..</div>
          )}
        </>
      )}
    </>
  );
};

export default WriteComment;
