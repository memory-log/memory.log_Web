import React from "react";
import "./MainPaperItem.scss";
import { ReactComponent as Like } from "../../../assets/images/like.svg";
import PaperType from "../../../util/types/Paper";
import moment from "moment";

interface MainPaperItemProps {
  paper: PaperType;
}

const MainPaperItem = ({ paper }: MainPaperItemProps) => {
  return (
    <>
      <div className="Main-Paper-Item">
        <div className="Main-Paper-Item-Thumbnail">
          <div className="Main-Paper-Item-Thumbnail-Image" />
        </div>
        <div className="Main-Paper-Item-Info">
          <div className="Main-Paper-Item-Info-Content">
            <p className="Main-Paper-Item-Info-Content-Date">{moment(paper.created_at).format("YYYY년 MM월 DD일")}</p>
            <p className="Main-Paper-Item-Info-Content-Title">{paper.title}</p>
          </div>
          <div className="Main-Paper-Item-Info-Bottom">
            <div className="Main-Paper-Item-Info-Bottom-Profile">
              <div className="Main-Paper-Item-Info-Bottom-Profile-Avatar" />
              <span className="Main-Paper-Item-Info-Bottom-Profile-Name">
                <span>To. </span>
                {paper.member.name}
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
