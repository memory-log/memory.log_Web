import React from "react";
import "./MainPaperItem.scss";
import like from "../../../assets/images/like.svg";

interface MainPaperItemProps {}

const MainPaperItem = ({}: MainPaperItemProps) => {
  return (
    <>
      <div className="Main-Paper-Item">
        <div className="Main-Paper-Item-Container">
          <div className="Main-Paper-Item-Container-Image"></div>
          <div className="Main-Paper-Item-Container-Info">
            <div className="Main-Paper-Item-Container-Info-Content">
              <p className="Main-Paper-Item-Container-Info-Content-Date">2020년 11월 3일</p>
              <p className="Main-Paper-Item-Container-Info-Content-Title">동해물과 백두산이 마르고 닳도록 하느님이dsadasdasd</p>
              <p className="Main-Paper-Item-Container-Info-Content-Description">
                남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은dsadadasdadsaddsadsadasdasdasdsasdsasdasdasddasd
              </p>
            </div>
            <div className="Main-Paper-Item-Container-Info-Bottom">
              <div className="Main-Paper-Item-Container-Info-Bottom-Profile">
                <div className="Main-Paper-Item-Container-Info-Bottom-Profile-Avatar"></div>
                <span className="Main-Paper-Item-Container-Info-Bottom-Profile-Name">
                  <span>To. </span>홍길동
                </span>
              </div>
              <div className="Main-Paper-Item-Container-Info-Bottom-Like">
                <img className="Main-Paper-Item-Container-Info-Bottom-Like-Icon" src={like} alt={like} />
                <span className="Main-Paper-Item-Container-Info-Bottom-Like-Count">30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPaperItem;
