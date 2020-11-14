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
  const { papers, handleSearchPaper } = store.PaperStore;
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("");

  const requestHandleSearchPaper = useCallback(async () => {
    setLoading(true);
    await handleSearchPaper(target).then((res: SearchPaperResponse) => {
      if (res.data.SearchedByName.length > 0 && res.data.SearchedByTitle.length > 0) {
        setNotFound(false);
      } else {
        setNotFound(true);
      }
      setLoading(false);
      console.log(papers);
    });
  }, []);

  useEffect(() => {
    requestHandleSearchPaper();
  }, []);

  return (
    <>
      <SearchPaper papers={papers} loading={loading} notFound={notFound} setTarget={setTarget} />
    </>
  );
};

export default observer(SearchPaperContainer);
