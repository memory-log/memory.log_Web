import React from "react";
import "./GetPaperMember.scss";
import PaperCommentType from "../../../../util/types/PaperComment";
import { ReactComponent as More } from "../../../../assets/images/more.svg";

interface GetPaperMemberProps {
  item: PaperCommentType;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  onModify: () => void;
  userIdx?: number;
  handleSelectedIdx: (idx: number) => void;
  selectedIdx?: number;
  handleDeleteIdx: (idx: number) => void;
  handleDeletePaperCommentCallback: (deleteIdx: number) => Promise<void>;
}

const GetPaperMember = ({
  handleSelectedIdx,
  item,
  hide,
  setHide,
  onModify,
  userIdx,
  selectedIdx,
  handleDeleteIdx,
  handleDeletePaperCommentCallback
}: GetPaperMemberProps) => {
  return (
    <>
      <div
        onClick={() => handleSelectedIdx(item.idx)}
        className={`GetPaper-Member ${selectedIdx === item.idx && "GetPaper-Member-Active"}`}
      >
        <div>{item.member.name}</div>
        {(item.member.idx === userIdx || item.paper.member.idx === userIdx) && (
          <>
            <More className="GetPaper-Member-More" onClick={() => setHide((prevState) => !prevState)} />
            {hide && (
              <div className="GetPaper-Member-Option">
                {item.member.idx === userIdx && <div onClick={() => onModify()}>수정하기</div>}
                <div onClick={() => handleDeletePaperCommentCallback(item.idx)}>삭제하기</div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default GetPaperMember;
