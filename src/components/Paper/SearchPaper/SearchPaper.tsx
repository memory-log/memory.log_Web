import React from "react";
import PaperType from "../../../util/types/Paper";
import MainPaperItem from "../../Main/MainPaperItem";
import MainPaperLoading from "../../Main/MainPaperLoading";
import "./SearchPaper.scss";

interface SearchPaperProps {
  search: PaperType[];
  loading: boolean;
  notFound: boolean;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  keyPressListener: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchPaper = ({ search, loading, notFound, setTarget, keyPressListener }: SearchPaperProps) => {
  return (
    <>
      <div className="Search-Paper">
        <div className="Search-Paper-Container">
          <input
            className="Search-Paper-Container-Bar"
            placeholder="제목 또는 이름으로 검색"
            onChange={(e) => setTarget(e.target.value)}
            onKeyPress={(e) => keyPressListener(e)}
          />
          {search.length ? <p>{search.length}개의 롤링페이퍼를 찾았어요.</p> : null}
          <div className="Search-Paper-Container-List">
            {loading ? (
              <>
                <MainPaperLoading />
              </>
            ) : (
              search.map((paper, idx) => <MainPaperItem key={idx} paper={paper} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPaper;
