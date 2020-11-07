import React from "react";
import AuthContainer from "../../containers/Auth/AuthContainer";
import MainPaperItem from "./MainPaperItem/MainPaperItem";
import "./Main.scss";

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
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
        </div>
      </div>
      <AuthContainer />
    </>
  );
};

export default Main;
