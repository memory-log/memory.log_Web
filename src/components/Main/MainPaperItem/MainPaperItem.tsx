import React from "react";
import "./MainPaperItem.scss";
import { ReactComponent as Like } from "../../../assets/images/like.svg";

interface MainPaperItemProps {}

const MainPaperItem = ({}: MainPaperItemProps) => {
  return (
    <>
      <div className="Main-Paper-Item">
        <div className="Main-Paper-Item-Image" />
        <div className="Main-Paper-Item-Info">
          <div className="Main-Paper-Item-Info-Content">
            <p className="Main-Paper-Item-Info-Content-Date">2020년 11월 3일</p>
            <p className="Main-Paper-Item-Info-Content-Title">이것은 테스트용 타이틀입니다 승호야 나 잘했찌 낌모링</p>
            <p className="Main-Paper-Item-Info-Content-Description">그리고 이거는 테스트용 설명이야요 이게 나야</p>
          </div>
          <div className="Main-Paper-Item-Info-Bottom">
            <div className="Main-Paper-Item-Info-Bottom-Profile">
              <div className="Main-Paper-Item-Info-Bottom-Profile-Avatar" />
              <span className="Main-Paper-Item-Info-Bottom-Profile-Name">
                <span>To. </span>홍길동
              </span>
            </div>
            <div className="Main-Paper-Item-Info-Bottom-Like">
              <Like className="Main-Paper-Item-Info-Bottom-Like-Icon" />
              <span className="Main-Paper-Item-Info-Bottom-Like-Count">30</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPaperItem;
