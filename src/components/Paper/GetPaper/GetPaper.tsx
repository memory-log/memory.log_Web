import React from "react";
import PaperType from "../../../util/types/Paper";
import "./GetPaper.scss";

interface GetPaperProps {
  loading: boolean;
  paperInfo?: PaperType;
}

const GetPaper = ({ loading, paperInfo }: GetPaperProps) => {
  console.log(paperInfo);

  return (
    <>
      <div></div>
    </>
  );
};

export default GetPaper;
