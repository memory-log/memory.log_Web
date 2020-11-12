import React from "react";
import "./SearchPaper.scss";

interface SearchPaperProps {}

const SearchPaper = ({}: SearchPaperProps) => {
  return (
    <>
      <div className="Search-Paper">
        <div className="Search-Paper-Container">
          <input className="Search-Paper-Container-Bar" placeholder="검색어를 입력해주세요." />
        </div>
      </div>
    </>
  );
};

export default SearchPaper;
