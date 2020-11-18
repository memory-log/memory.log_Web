import { observer } from "mobx-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "../../components/common/Header";
import useStore from "../../lib/hooks/useStore";
import refresh from "../../lib/refresh";
import axios from "axios";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

const HeaderContainer = () => {
  const { store } = useStore();
  const { showModal, login, getInfo, tryLogOut, profileImage } = store.AuthStore;
  const { tapState, tapClickHandler } = store.HeaderStore;

  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const [isMain, setIsMain] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [pageY, setPageY] = useState<number>(0);

  const [showOption, setShowOption] = useState<boolean>(false);

  const history = useHistory();
  const location = useLocation();

  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    const shadow = pageYOffset > 50 && deltaY < 0;
    setShadow(shadow);
    setHide(hide);
    setPageY(pageYOffset);
  };

  const logOut = () => {
    localStorage.clear();
    removeCookie("refreshToken");
    setShowOption(false);
    tryLogOut();
  };

  const onClose = () => {
    setShowOption(false);
  };

  const MyProfile = () => {
    history.push("/profile");
  };

  const create = () => {
    history.push("/create");
  };

  const handleIsMain = () => {
    if (location.pathname === "/") {
      setIsMain(true);
    }
  };

  const getInfoCallback = useCallback(() => {
    if (!login && localStorage.getItem("accessToken")) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
      getInfo().catch(async (err: Error) => {
        if (err.message.indexOf("410")) {
          if (await refresh()) {
            getInfo().catch((err: Error) => {
              console.log("권한 없음");
            });
          }
        }
      });
    }
  }, [login]);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () => documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  useEffect(() => {
    getInfoCallback();
  }, [getInfoCallback]);

  useEffect(() => {
    handleIsMain();
  }, [handleIsMain]);

  return (
    <>
      <Header
        shadow={shadow}
        hide={hide}
        showModal={showModal}
        isMain={isMain}
        login={login}
        tapState={tapState}
        tapClickHandler={tapClickHandler}
        create={create}
        showOption={showOption}
        setShowOption={setShowOption}
        onClose={onClose}
        logOut={logOut}
        MyProfile={MyProfile}
        profileImage={profileImage}
      />
    </>
  );
};

export default withRouter(observer(HeaderContainer));
