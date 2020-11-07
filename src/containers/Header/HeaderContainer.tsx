import { inject, observer } from "mobx-react";
import React from "react";
import Header from "../../components/common/Header";
import stores from "../../stores";

const HeaderContainer = () => {
  const { showModal } = stores.AuthStore;
  return (
    <>
      <Header showModal={showModal} />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
