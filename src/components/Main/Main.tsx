import React from "react";
import "./Main.scss";
import people from "../../assets/images/people.svg";
import MaterialButton from "../common/Material/MaterialButton";
import FadeIn from "react-fade-in";
import { useHistory, withRouter } from "react-router-dom";

interface MainProps {}

const Main = () => {
  const history = useHistory();

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
          <FadeIn delay={500}>
            <img className="Main-Container-Image" src={people} alt={people} />
          </FadeIn>
        </div>
        <div className="Main-Button">
          <FadeIn delay={600}>
            <MaterialButton
              onClick={() => {
                history.push("/login");
              }}
            >
              롤링페이퍼 시작하기
            </MaterialButton>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default withRouter(Main);
