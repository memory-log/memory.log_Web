import { inject, observer } from "mobx-react";
import React from "react";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal";
import stores from "../../stores";

const LoginContainer = () => {
  const { isModalSelected, selectLoginModal } = stores.LoginStore;
  return (
    <>
      {isModalSelected && (
        <Modal handleClose={selectLoginModal}>
          <Login />
        </Modal>
      )}
    </>
  );
};

export default inject("store")(observer(LoginContainer));
