import React from "react";
import MainNotFoundContainer from "../../containers/Main/MainNotFound/MainNotFoundContainer";
import MainPaperItem from "./MainPaperItem";
import MainPaperLoading from "./MainPaperLoading";
import PaperType from "../../util/types/Paper";
import "./Main.scss";

interface MainProps {
  papers: PaperType[];
  notFound: boolean;
  loading: boolean;
}

const Main = ({ papers, notFound, loading }: MainProps) => {
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
          {notFound ? (
            <MainNotFoundContainer />
          ) : (
            <div className="Main-Container-List">
              {loading ? (
                <>
                  <MainPaperLoading />
                  <MainPaperLoading />
                  <MainPaperLoading />
                  <MainPaperLoading />
                  <MainPaperLoading />
                  <MainPaperLoading />
                </>
              ) : (
                papers.map((paper, idx) => <MainPaperItem key={idx} paper={paper} />)
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
