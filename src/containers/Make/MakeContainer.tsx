import React from "react";
import { observer } from "mobx-react";
import Make from "../../components/Make/Make";

const MakeContainer = ({}) => {
  return (
    <>
      <Make />
    </>
  );
};

export default observer(MakeContainer);
