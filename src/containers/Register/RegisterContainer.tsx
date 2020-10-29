import React from "react";
import Register from "../../components/Register";

interface RegisterContainerProps {
  changePage: () => void;
}

const RegisterContainer = ({ changePage }: RegisterContainerProps) => {
  return (
    <>
      <Register changePage={changePage} />
    </>
  );
};

export default RegisterContainer;
