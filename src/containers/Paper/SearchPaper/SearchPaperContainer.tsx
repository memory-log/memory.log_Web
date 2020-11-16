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

  const filterSearchedPaper = useCallback(() => {
    setNotFound(false);
    if (filter === "") {
      setSearch([...searchedByName, ...searchedByTitle]);
    } else if (filter === "name") {
      if (!searchedByName.length) {
        setNotFound(true);
      }
      setSearch(searchedByName);
    } else if (filter === "title") {
      if (!searchedByTitle.length) {
        setNotFound(true);
      }
      setSearch(searchedByTitle);
    }
  }, [filter, searchedByName, searchedByTitle]);

  const requestHandleSearchPaper = useCallback(async () => {
    if (target) {
      setLoading(true);
      await handleSearchPaper(target)
        .then((res: SearchPaperResponse) => {
          console.log(res.data);
          if (!res.data.SearchedByName.length && !res.data.SearchedByTitle.length) {
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
      />
    </>
  );
};

export default observer(SearchPaperContainer);
