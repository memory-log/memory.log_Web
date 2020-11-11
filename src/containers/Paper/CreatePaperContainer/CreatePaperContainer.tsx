import React, { useEffect } from "react";
import { observer } from "mobx-react";
import CreatePaper from "../../../components/Paper/CreatePaper";
import useStore from "../../../lib/hooks/useStore";

const CreatePaperContainer = ({}) => {
  const { store } = useStore();
  const { isMainHandler } = store.HeaderStore;
  useEffect(() => {
    isMainHandler(false);
  }, []);
  return (
    <>
      <CreatePaper />
    </>
  );
};

export default observer(CreatePaperContainer);
