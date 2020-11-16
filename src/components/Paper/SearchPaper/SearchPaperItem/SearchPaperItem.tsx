import React from "react";
import "./SearchPaperItem.scss";
import { ReactComponent as Like } from "../../../../assets/images/like.svg";
import PaperType from "../../../../util/types/Paper";
import moment from "moment";

interface SearchPaperItemProps {
  paper: PaperType;
}

const SearchPaperItem = ({ paper }: SearchPaperItemProps) => {
  return (
    <>
      <div className="Search-Paper-Item">
        <div className="Search-Paper-Item-Thumbnail">
          <div className="Search-Paper-Item-Thumbnail-Image" />
        </div>
        <div className="Search-Paper-Item-Info">
          <div className="Search-Paper-Item-Info-Content">
            <p className="Search-Paper-Item-Info-Content-Date">{moment(paper.created_at).format("YYYY년 MM월 DD일")}</p>
            <p className="Search-Paper-Item-Info-Content-Title">{paper.title}</p>
          </div>
          <div className="Search-Paper-Item-Info-Bottom">
            <div className="Search-Paper-Item-Info-Bottom-Profile">
              <div className="Search-Paper-Item-Info-Bottom-Profile-Avatar" />
              <span className="Search-Paper-Item-Info-Bottom-Profile-Name">
                <span>To. </span>
                {paper.member.name}
              </span>
            </div>
            <div className="Search-Paper-Item-Info-Bottom-Like">
              <Like className="Search-Paper-Item-Info-Bottom-Like-Icon" />
              <span className="Search-Paper-Item-Info-Bottom-Like-Count">30</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPaperItem;
