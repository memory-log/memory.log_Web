import React from "react";
import { observer } from "mobx-react";
import ChangePosition from "../../../components/Paper/ChangePosition";

const ChangePositionContainer = ({}) => {
  return (
    <>
      <ChangePosition />
    </>
  );
};

export default observer(ChangePositionContainer);
