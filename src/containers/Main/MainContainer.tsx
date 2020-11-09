import { inject, observer } from "mobx-react";
import React from "react";
import Main from "../../components/Main";
import PostStore from "../../stores/Post";

interface MainContainerProps {
  store?: StoreType;
}

interface StoreType {
  PostStore: PostStore;
}

const MainContainer = ({ store }: MainContainerProps) => {
  const { tapState } = store!.PostStore;
  return (
    <>
      <Main tapState={tapState} />
    </>
  );
};

export default inject("store")(observer(MainContainer));
