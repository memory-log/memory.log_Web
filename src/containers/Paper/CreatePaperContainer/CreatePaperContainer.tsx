import React, { useEffect } from "react";
import { observer } from "mobx-react";
import CreatePaper from "../../../components/Paper/CreatePaper";

const CreatePaperContainer = ({}) => {
  return (
    <>
      <CreatePaper />
    </>
  );
};

export default observer(CreatePaperContainer);
