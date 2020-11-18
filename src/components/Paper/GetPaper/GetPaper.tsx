import React from "react";
import generateURL from "../../../lib/generateURL";
import PaperType from "../../../util/types/Paper";
import PaperCommentType from "../../../util/types/PaperComment";
import Button from "../../../components/common/Button";
import "./GetPaper.scss";

import { ReactComponent as Before } from "../../../assets/images/next.svg";
import { ReactComponent as Pencil } from "../../../assets/images/pencil.svg";
import { ReactComponent as PaperPlane } from "../../../assets/images/paper-plane.svg";
import { ReactComponent as Like } from "../../../assets/images/like.svg";
import { Link } from "react-router-dom";

interface GetPaperProps {
  loading: boolean;
  paperInfo?: PaperType;
  paperComments: PaperCommentType[];
  handleLikePaperCallback: () => Promise<void>;
}

const GetPaper = ({ loading, paperInfo, paperComments, handleLikePaperCallback }: GetPaperProps) => {
  console.log(paperComments);

  return (
    <>
      <div className="Get-Paper">
        <div className="Get-Paper-Container">
          <div className="Get-Paper-Container-Header">
            <Link to="/">
              <Before className="Get-Paper-Container-Header-Before" />
            </Link>
            <div className="Get-Paper-Container-Header-Title">
              <p className="Get-Paper-Container-Header-Title-Name">To. {paperInfo?.member.name}</p>
              <p className="Get-Paper-Container-Header-Title-Status">
                {paperComments.length}개의 글이 롤링페이퍼에 작성되었어요 😀
              </p>
            </div>
          </div>
          <div className="Get-Paper-Container-Content">
            {paperComments.map((item: PaperCommentType, idx: number) => (
              <div
                className="Get-Paper-Container-Content-Mapped"
                style={{
                  transform: `translate(${item.location_x}px, ${item.location_y}px`,
                  fontFamily: item.fontFamily,
                  color: item.color
                }}
                key={idx}
              >
                {item.image ? <img src={generateURL(item.image)} /> : <div>{item.comment}</div>}
              </div>
            ))}
          </div>
          <div className="Get-Paper-Container-Bottom">
            <div className="Get-Paper-Container-Bottom-Button">
              <Link
                to={
                  paperInfo?.scope === "ONLY_CODE"
                    ? `/write?idx=${paperInfo?.idx}&code=${paperInfo?.code}`
                    : `/write?idx=${paperInfo?.idx}`
                }
              >
                {/* {new Date(paperInfo?.endTime!) < new Date() && (
                  
                )} */}
                <Button text="글 쓰기" style={{ width: "6.8rem", height: "2.5rem", fontSize: "1rem", marginRight: "0.8rem" }}>
                  <Pencil style={{ marginRight: "0.4rem" }} />
                </Button>
              </Link>
              <div className="Get-Paper-Container-Bottom-Button-Share">
                <PaperPlane style={{ width: "1.3rem" }} />
              </div>
            </div>
            <div className="Get-Paper-Container-Bottom-Like">
              <Like
                className={
                  paperInfo?.like
                    ? "Get-Paper-Container-Bottom-Like-Icon-Clicked Get-Paper-Container-Bottom-Like-Icon"
                    : "Get-Paper-Container-Bottom-Like-Icon"
                }
                onClick={() => handleLikePaperCallback()}
              />
              <p className="Get-Paper-Container-Bottom-Like-Text">{paperInfo?.likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPaper;
