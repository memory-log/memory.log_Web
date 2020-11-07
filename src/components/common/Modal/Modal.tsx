import React, { useEffect } from "react";
import "./Modal.scss";
import exit from "../../../assets/images/close.svg";

interface ModalProps {
  close: () => void;
  show: boolean;
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ close, show, open, children }: ModalProps) => {
  useEffect(() => {
    open ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {show && (
        <div className="Modal">
          <div
            className={open ? "Modal-Background-Enable Modal-Background" : "Modal-Background-Disable Modal-Background"}
            onClick={close}
          ></div>
          <div className={open ? "Modal-Box-Enable Modal-Box" : "Modal-Box-Disable Modal-Box"}>
            <img src={exit} alt={exit} onClick={close} />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
