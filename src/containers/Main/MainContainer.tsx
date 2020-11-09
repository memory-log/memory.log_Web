import { observer } from "mobx-react";
import React, { useEffect } from "react";
import Main from "../../components/Main";
import useStore from "../../lib/hooks/useStore";

const MainContainer = () => {
  const { store } = useStore();
  const { tapState, isMainHandler } = store.HeaderStore;

  useEffect(() => {
    isMainHandler(true);
  }, []);

  return (
    <>
      <Main tapState={tapState} />
    </>
  );
};

export default observer(MainContainer);
