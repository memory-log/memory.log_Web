import { observer } from "mobx-react";
import React from "react";
import Auth from "../../components/Auth/Auth";
import Modal from "../../components/common/Modal/Modal";
import useStore from "../../lib/hooks/useStore";

const AuthContainer = () => {
  const { store } = useStore();
  const { show, open, page, showModal, changePage } = store.AuthStore;

  return (
    <>
      <Modal close={showModal} show={show} open={open}>
        <Auth page={page} changePage={changePage} />
      </Modal>
    </>
  );
};

export default observer(AuthContainer);
