import React, { useEffect } from "react";
import { observer } from "mobx-react";
import Make from "../../components/Make/Make";
import useStore from "../../../lib/hooks/useStore";

const MakeContainer = ({}) => {
  const { store } = useStore();
  const { isMainHandler } = store.HeaderStore;
  useEffect(() => {
    isMainHandler(false);
  }, []);
  return (
    <>
      <Make />
    </>
  );
};

export default observer(MakeContainer);
