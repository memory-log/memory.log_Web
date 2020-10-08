import React from "react";
import "./Main.scss";
import people from "../../assets/images/people.svg";
import Button from "../common/Material/Button";

const Main = () => {
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
          <div className="Main-Container-Text">
            <p>남기고 싶은 추억을</p>
            <p>롤링페이퍼에 작성해보세요.</p>
          </div>
          <img src={people} alt={people} />
          <Button variant="contained" onClick={() => {}}>
            롤링페이퍼 시작하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default Main;
