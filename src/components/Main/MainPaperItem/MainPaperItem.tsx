import React from "react";
import "./MainPaperItem.scss";
import { ReactComponent as Like } from "../../../assets/images/like.svg";
import profile from "../../../assets/images/profile.svg";
import PaperType from "../../../util/types/Paper";
import moment from "moment";
import { Link } from "react-router-dom";
import generateURL from "../../../lib/generateURL";

interface MainPaperItemProps {
  paper: PaperType;
}

const MainPaperItem = ({ paper }: MainPaperItemProps) => {
  return (
    <>
      <Link
        to={paper.scope === "ONLY_CODE" ? `/paper?idx=${paper.idx}&code=${paper.code}` : `/paper?idx=${paper.idx}`}
        className="Main-Paper-Item"
      >
        <div className="Main-Paper-Item-Thumbnail">
          <div className="Main-Paper-Item-Thumbnail-Image" />
        </div>
        <div className="Main-Paper-Item-Info">
          <div className="Main-Paper-Item-Info-Content">
            <p className="Main-Paper-Item-Info-Content-Date">{moment(paper.createdAt).format("YYYY년 MM월 DD일")}</p>
            <p className="Main-Paper-Item-Info-Content-Title">{paper.title}</p>
          </div>
          <div className="Main-Paper-Item-Info-Bottom">
            <div className="Main-Paper-Item-Info-Bottom-Profile">
              <img
                className="Main-Paper-Item-Info-Bottom-Profile-Avatar"
                src={paper.member.profile_image ? generateURL(paper.member.profile_image) : profile}
                alt="profile"
              />
              <span className="Main-Paper-Item-Info-Bottom-Profile-Name">
                <span>To. </span>
                {paper.member.name}
              </span>
            </div>
            <div className="Main-Paper-Item-Info-Bottom-Like">
              <Like className="Main-Paper-Item-Info-Bottom-Like-Icon" />
              <span className="Main-Paper-Item-Info-Bottom-Like-Count">{paper.likeCount}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainPaperItem;
