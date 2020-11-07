import { inject, observer } from "mobx-react";
import React from "react";
import Auth from "../../components/Auth/Auth";
import Modal from "../../components/common/Modal/Modal";
import AuthStore from "../../stores/Auth/AuthStore";

interface AuthContainerProps {
  store?: StoreType;
}

interface StoreType {
  AuthStore: AuthStore;
}

const AuthContainer = ({ store }: AuthContainerProps) => {
  const { show, open, page, showModal, changePage } = store!.AuthStore;

  return (
    <>
      <Modal close={showModal} show={show} open={open}>
        <Auth page={page} changePage={changePage} />
      </Modal>
    </>
  );
};

export default inject("store")(observer(AuthContainer));
