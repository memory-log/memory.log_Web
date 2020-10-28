import React from "react";
import "./Modal.scss";

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ handleClose, children }: ModalProps) => {
  return (
    <div className="Modal">
      <div className="Modal-Background" onClick={handleClose}></div>
      <div className="Modal-Box">{children}</div>
    </div>
  );
};

export default Modal;
