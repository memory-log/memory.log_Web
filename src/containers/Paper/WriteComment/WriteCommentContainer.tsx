import React, { useState } from "react";
import { observer } from "mobx-react";
import WriteComment from "../../../components/Paper/WriteComment";

const WriteCommentContainer = ({}) => {
  const [color, setColor] = useState("#707070");
  const [name, setName] = useState("받는이");
  const [write, setWrite] = useState("nomal");
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  return (
    <>
      <WriteComment
        handleImageChange={handleImageChange}
        preview={preview}
        setColor={setColor}
        color={color}
        name={name}
        write={write}
        setWrite={setWrite}
      />
    </>
  );
};

export default observer(WriteCommentContainer);
