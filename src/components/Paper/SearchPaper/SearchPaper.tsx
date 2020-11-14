import React from "react";
import PaperType from "../../../util/types/Paper";
import "./SearchPaper.scss";

interface SearchPaperProps {
  papers: PaperType[];
  loading: boolean;
  notFound: boolean;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPaper = ({ papers, loading, notFound, setTarget }: SearchPaperProps) => {
  return (
    <>
      <div className="Search-Paper">
        <div className="Search-Paper-Container">
          <input
            className="Search-Paper-Container-Bar"
            placeholder="검색어를 입력해주세요."
            onChange={(e) => {
              setTarget(e.target.value);
            }}
          />
          <button onClick={() => {}}>검색띠</button>
        </div>
      </div>
    </>
  );
};

export default SearchPaper;
