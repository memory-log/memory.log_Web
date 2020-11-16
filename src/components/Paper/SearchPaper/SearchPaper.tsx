import React from "react";
import PaperType from "../../../util/types/Paper";
import MainPaperLoading from "../../Main/MainPaperLoading";
import "./SearchPaper.scss";
import SearchPaperItem from "./SearchPaperItem";

interface SearchPaperProps {
  search: PaperType[];
  loading: boolean;
  notFound: boolean;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  keyPressListener: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchPaper = ({ search, loading, notFound, setTarget, setFilter, keyPressListener }: SearchPaperProps) => {
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
          {/* <button onClick={() => setFilter("title")}>제목만</button>
          <button onClick={() => setFilter("name")}>이름만</button> */}
          {notFound ? (
            <h1>아무것도 없음 ㅋ</h1>
          ) : (
            <>
              {search.length ? (
                <p className="Search-Paper-Container-Result">
                  총 <span style={{ fontWeight: 700 }}>{search.length}개</span>의 롤링페이퍼를 찾았어요.
                </p>
              ) : null}
              <div className="Search-Paper-Container-List">
                {loading ? (
                  <>
                    <MainPaperLoading />
                  </>
                ) : (
                  search.map((paper, idx) => <SearchPaperItem key={idx} paper={paper} />)
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPaper;
