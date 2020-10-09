import { inject, observer } from "mobx-react";
import React from "react";
import Header from "../../components/common/Header";

const HeaderContainer = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
