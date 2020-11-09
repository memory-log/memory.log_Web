import React, { useState } from "react";
import { observer } from "mobx-react";
import Write from "../../components/Write/Write";

const WriteContainer = ({}) => {
  const [color, setColor] = useState("#707070");
  const [name, setName] = useState("user");

  return (
    <>
      <Write setColor={setColor} color={color} name={name} />
    </>
  );
};

export default observer(WriteContainer);
