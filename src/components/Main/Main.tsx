import React from "react";
import AuthContainer from "../../containers/Auth/AuthContainer";
import MainNotFound from "../Main/MainNotFound";
import MainPaperItem from "./MainPaperItem/MainPaperItem";
import "./Main.scss";

interface MainProps {
  tapState: number;
}

const Main = ({ tapState }: MainProps) => {
  //NotFound 페이지 테스트 때문에 조건부 렌더링좀 괴상하게 해놨습니다 신경 안써두대양
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
          {tapState === 2 ? (
            <MainNotFound />
          ) : (
            <div className="Main-Container-List">
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
              <MainPaperItem />
            </div>
          )}
        </div>
      </div>
      <AuthContainer />
    </>
  );
};

export default Main;
