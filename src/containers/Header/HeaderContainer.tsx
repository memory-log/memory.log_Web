import { inject, observer } from "mobx-react";
import React from "react";
import Header from "../../components/common/Header";
import stores from "../../stores";

const HeaderContainer = () => {
  const { selectModal } = stores.AuthStore;
  return (
    <>
      <Header selectModal={selectModal} />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
