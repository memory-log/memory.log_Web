import React from "react";
import PaperType from "../../../util/types/Paper";
import MainPaperLoading from "../../Main/MainPaperLoading";
import "./SearchPaper.scss";
import filters from "../../../models/filterModel";
import SearchPaperItem from "./SearchPaperItem";

interface SearchPaperProps {
  search: PaperType[];
  loading: boolean;
  notFound: boolean;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  keyPressListener: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  filterState: number;
  setFilterState: React.Dispatch<React.SetStateAction<number>>;
}

const SearchPaper = ({
  search,
  loading,
  notFound,
  setTarget,
  setFilter,
  keyPressListener,
  filterState,
  setFilterState
}: SearchPaperProps) => {
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
          <div className="Search-Paper-Container-Filter">
            <div className="Search-Paper-Container-Filter-List">
              {filters.map((filter, idx) => (
                <div
                  className={
                    filterState === idx
                      ? "Search-Paper-Container-Filter-List-Item-Clicked Search-Paper-Container-Filter-List-Item"
                      : "Search-Paper-Container-Filter-List-Item"
                  }
                  key={idx}
                  onClick={() => {
                    setFilterState(idx);
                    setFilter(filter.value);
                  }}
                >
                  <p>{filter.title}</p>
                </div>
              ))}
            </div>
          </div>
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
                {loading ? <></> : search.map((paper, idx) => <SearchPaperItem key={idx} paper={paper} />)}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPaper;
