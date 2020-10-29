import React from "react";
import "./Modal.scss";
import close from "../../../assets/images/close.svg";

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ handleClose, children }: ModalProps) => {
  return (
    <div className="Modal">
      <div className="Modal-Background" onClick={handleClose}></div>
      <div className="Modal-Box">
        <img src={close} alt={close} onClick={handleClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
