import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import SearchPaper from "../../../components/Paper/SearchPaper/SearchPaper";
import PaperType from "../../../util/types/Paper";
import useStore from "../../../lib/hooks/useStore";

interface SearchPaperResponse {
  status: number;
  message: string;
  data: {
    SearchedByName: PaperType[];
    SearchedByTitle: PaperType[];
  };
}

const SearchPaperContainer = ({}) => {
  const { store } = useStore();
  const { searchedByName, searchedByTitle, handleSearchPaper } = store.PaperStore;
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<PaperType[]>([]);
  const [filterState, setFilterState] = useState<number>(0);

  const filterSearchedPaper = useCallback(() => {
    if (searchedByName.length || searchedByTitle.length) {
      if (filter === "") {
        setNotFound(false);
        setSearch([...searchedByName, ...searchedByTitle]);
      } else if (filter === "name") {
        setNotFound(!searchedByName.length);
        setSearch(searchedByName);
      } else if (filter === "title") {
        setNotFound(!searchedByTitle.length);
        setSearch(searchedByTitle);
      }
    }
  }, [filter, searchedByName, searchedByTitle]);

  const requestHandleSearchPaper = useCallback(async () => {
    if (target) {
      setLoading(true);
      await handleSearchPaper(target)
        .then((res: SearchPaperResponse) => {
          if (res.data.SearchedByName.length === 0 && res.data.SearchedByTitle.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
          setLoading(false);
        })
        .catch((error: Error) => {
          console.log("실패", error);
        });
    }
  }, [target]);

  useEffect(() => {
    filterSearchedPaper();
  }, [filterSearchedPaper]);

  const keyPressListener = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === "NumpadEnter") && target !== "") {
      requestHandleSearchPaper();
    }
  };

  return (
    <>
      <SearchPaper
        search={search}
        loading={loading}
        notFound={notFound}
        setTarget={setTarget}
        setFilter={setFilter}
        keyPressListener={keyPressListener}
        filterState={filterState}
        setFilterState={setFilterState}
      />
    </>
  );
};

export default observer(SearchPaperContainer);
