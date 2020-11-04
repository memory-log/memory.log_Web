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
  const { isModalSelected, isPageChanged, selectModal, changePage } = store!.AuthStore;

  return (
    <>
      {isModalSelected && (
        <Modal handleClose={selectModal} isModalSelected={isModalSelected}>
          <Auth isPageChanged={isPageChanged} changePage={changePage} />
        </Modal>
      )}
    </>
  );
};

export default inject("store")(observer(AuthContainer));
