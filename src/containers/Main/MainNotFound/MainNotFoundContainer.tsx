import React from "react";
import { observer } from "mobx-react";
import MainNotFound from "../../../components/Main/MainNotFound";
import useStore from "../../../lib/hooks/useStore";
import { useHistory } from "react-router-dom";

const MainNotFoundContainer = ({}) => {
  const { store } = useStore();
  const { login, showModal } = store.AuthStore;

  const history = useHistory();

  const toCreate = () => {
    history.push("/create");
  };

  return (
    <>
      <MainNotFound login={login} showModal={showModal} toCreate={toCreate} />
    </>
  );
};

export default observer(MainNotFoundContainer);
