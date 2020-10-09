import React from "react";
import "./Main.scss";
import people from "../../assets/images/people.svg";
import Button from "../common/Material/Button";
import FadeIn from "react-fade-in";

const Main = () => {
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
          <div className="Main-Container-Text">
            <FadeIn delay={100}>
              <p>남기고 싶은 추억을</p>
              <p>롤링페이퍼에 작성해보세요.</p>
            </FadeIn>
          </div>
          <FadeIn delay={400}>
            <img className="Main-Container-Image" src={people} alt={people} />
          </FadeIn>
        </div>
        <div className="Main-Button">
          <FadeIn delay={500}>
            <Button variant="contained" onClick={() => {}}>
              롤링페이퍼 시작하기
            </Button>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Main;
