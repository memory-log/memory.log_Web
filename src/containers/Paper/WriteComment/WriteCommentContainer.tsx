import React, { useState } from "react";
import { observer } from "mobx-react";
import WriteComment from "../../../components/Paper/WriteComment";

const WriteCommentContainer = ({}) => {
  const [color, setColor] = useState("#707070");
  const [name, setName] = useState("user");

  return (
    <>
      <WriteComment setColor={setColor} color={color} name={name} />
    </>
  );
};

export default observer(WriteCommentContainer);
