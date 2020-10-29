import { inject, observer } from "mobx-react";
import React from "react";
import Auth from "../../components/Auth/Auth";
import Modal from "../../components/common/Modal/Modal";
import stores from "../../stores";

const AuthContainer = () => {
  const { isModalSelected, isPageChanged, selectModal, changePage } = stores.AuthStore;
  return (
    <>
      {isModalSelected && (
        <Modal handleClose={selectModal}>
          <Auth isPageChanged={isPageChanged} changePage={changePage} />
        </Modal>
      )}
    </>
  );
};

export default inject("store")(observer(AuthContainer));
