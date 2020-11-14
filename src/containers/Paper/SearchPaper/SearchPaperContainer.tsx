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
  const { search, handleSearchPaper } = store.PaperStore;
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const requestHandleSearchPaper = useCallback(async () => {
    setLoading(true);
    await handleSearchPaper(target).then((res: SearchPaperResponse) => {
      if (res.data.SearchedByName.length > 0 && res.data.SearchedByTitle.length > 0) {
        setNotFound(false);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    });
  }, [target, filter]);

  const keyPressListener = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
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
        keyPressListener={keyPressListener}
      />
    </>
  );
};

export default observer(SearchPaperContainer);
