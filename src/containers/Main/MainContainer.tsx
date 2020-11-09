import { observer } from "mobx-react";
import React from "react";
import Main from "../../components/Main";
import useStore from "../../lib/hooks/useStore";

const MainContainer = () => {
  const { store } = useStore();
  const { tapState } = store.PostStore;
  return (
    <>
      <Main tapState={tapState} />
    </>
  );
};

export default observer(MainContainer);
