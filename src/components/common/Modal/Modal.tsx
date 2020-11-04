import React from "react";
import "./Modal.scss";
import close from "../../../assets/images/close.svg";

interface ModalProps {
  handleClose: () => void;
  isModalSelected: boolean;
  children: React.ReactNode;
}

const Modal = ({ handleClose, isModalSelected, children }: ModalProps) => {
  return (
    <div className="Modal">
      <div
        className={isModalSelected ? "Modal-Background-Enable Modal-Background" : "Modal-Background-Disable Modal-Background"}
        onClick={handleClose}
      ></div>
      <div className={isModalSelected ? "Modal-Box-Enable Modal-Box" : "Modal-Box-Disable Modal-Box"}>
        <img src={close} alt={close} onClick={handleClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
