import React from "react";
import "./MainPaperLoading.scss";

interface MainPaperLoadingProps {}

const MainPaperLoading = ({}: MainPaperLoadingProps) => {
  return (
    <>
      <div className="Main-Paper-Loading">
        <div className="Main-Paper-Loading-Image" />
        <div className="Main-Paper-Loading-Info">
          <div className="Main-Paper-Loading-Info-Content">
            <div className="Main-Paper-Loading-Info-Content-Date" />
            <div className="Main-Paper-Loading-Info-Content-Title" />
          </div>
          <div className="Main-Paper-Loading-Info-Bottom">
            <div className="Main-Paper-Loading-Info-Bottom-Profile">
              <div className="Main-Paper-Loading-Info-Bottom-Profile-Avatar" />
              <div className="Main-Paper-Loading-Info-Bottom-Profile-Name" />
            </div>
            <div className="Main-Paper-Loading-Info-Bottom-Like" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPaperLoading;
