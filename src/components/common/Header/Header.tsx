import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Title } from "../../../assets/images/title.svg";
import { Link } from "react-router-dom";
import taps from "../../../lib/models/tapModel";
import { ReactComponent as Profile } from "../../../assets/images/profile.svg";
import HeaderProfile from "./HeaderProfile";

interface HeaderProps {
  shadow: boolean;
  hide: boolean;
  showModal: () => void;
  isMain: boolean;
  tapState: number;
  tapClickHandler: (idx: number) => void;
  login: boolean;
  create: () => void;
  headerProfile: boolean;
  showProfileBox: () => void;
}

const Header = ({
  shadow,
  hide,
  showModal,
  isMain,
  tapState,
  tapClickHandler,
  login,
  create,
  headerProfile,
  showProfileBox
}: HeaderProps) => {
  return (
    <>
      <div className={hide ? "Header-Hide Header" : shadow ? "Header-Shadow Header" : "Header"}>
        <div className="Header-Container">
          <div className="Header-Container-Content">
            <Link to="/">
              <div className="Header-Container-Content-Logo">
                <Logo className="Header-Container-Content-Logo-Icon" />
                <Title className="Header-Container-Content-Logo-Title" />
              </div>
            </Link>
            {login ? (
              <div className="Header-Container-Content-Account">
                <button className="Header-Container-Content-Account-Write" onClick={() => create()}>
                  작성하기
                </button>
                <Profile
                  className="Header-Container-Content-Account-Profile"
                  onClick={() => {
                    showProfileBox();
                  }}
                />
              </div>
            ) : (
              <div className="Header-Container-Content-Account">
                <button className="Header-Container-Content-Account-Login" onClick={() => showModal()}>
                  로그인
                </button>
              </div>
            )}
            {headerProfile && login ? <HeaderProfile /> : <></>}
          </div>
          {isMain && (
            <div className="Header-Container-Buttons">
              {taps.map((tap, idx) => (
                <div className="Header-Container-Buttons-Button" key={idx} onClick={() => tapClickHandler(idx)}>
                  <p
                    className={
                      tapState === idx
                        ? "Header-Container-Buttons-Button-Name-Clicked Header-Container-Buttons-Button-Name"
                        : "Header-Container-Buttons-Button-Name"
                    }
                  >
                    {tap}
                  </p>
                  <div
                    className={
                      tapState === idx
                        ? "Header-Container-Buttons-Button-Line-Clicked Header-Container-Buttons-Button-Line"
                        : "Header-Container-Buttons-Button-Line"
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
