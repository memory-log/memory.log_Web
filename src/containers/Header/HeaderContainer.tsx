import { inject, observer } from "mobx-react";
import React from "react";
import Header from "../../components/common/Header";
import stores from "../../stores";

const HeaderContainer = () => {
  const { selectLoginModal } = stores.LoginStore;
  return (
    <>
      <Header selectLoginModal={selectLoginModal} />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
