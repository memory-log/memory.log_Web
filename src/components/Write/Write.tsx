import React from "react";
import "./Write.scss";
import { FiPlus } from "react-icons/fi";
import { writeColor } from "../../models/colorTemplate";
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";

interface WriteProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

const Write = ({ name, setColor, color }: WriteProps) => {
  return (
    <>
      <div className="write">
        <div className="write-box">
          <div className="write-box-title">
            {name}님에게 <br />
            전달할 말을 적어주세요
          </div>
          <div className="write-box-color">
            <div className="write-box-color-name">글자색</div>
            <div className="write-box-color-area">
              {writeColor.map((color: string, index: number) => (
                <div key={index} style={{ backgroundColor: color }} onClick={() => setColor(color)} />
              ))}
              <label htmlFor="write-color-picker">
                <input
                  id="write-color-picker"
                  className="write-box-color-area-picker"
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
                <FiPlus />
              </label>
            </div>
          </div>
          <textarea autoFocus className="write-box-textbox" placeholder="글을 작성해주세요." style={{ color: color }} />
          <div className="write-box-btnarea">
            <Link to="/position">
              <Button text="다음" style={{ width: "40rem", height: "3.6rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
