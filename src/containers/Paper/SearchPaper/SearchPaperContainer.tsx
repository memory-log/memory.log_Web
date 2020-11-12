import React from "react";
import { observer } from "mobx-react";
import SearchPaper from "../../../components/Paper/SearchPaper/SearchPaper";

const SearchPaperContainer = ({}) => {
  return (
    <>
      <SearchPaper />
    </>
  );
};

export default observer(SearchPaperContainer);
