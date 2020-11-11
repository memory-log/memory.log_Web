import { observer } from "mobx-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "../../components/common/Header";
import useStore from "../../lib/hooks/useStore";
import refresh from "../../lib/refresh";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HeaderContainer = () => {
  const { store } = useStore();
  const { showModal, login, getInfo, name } = store.AuthStore;
  const { isMain, tapState, tapClickHandler } = store.HeaderStore;

  const [hide, setHide] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [pageY, setPageY] = useState<number>(0);

  const history = useHistory();

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

  const create = () => {
    history.push("/create");
  };

  const getInfoCallback = useCallback(() => {
    if (localStorage.getItem("accessToken")) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
      setTimeout(() => {
        getInfo().catch(async (err: Error) => {
          if (err.message.indexOf("410")) {
            if (await refresh()) {
              getInfo().catch((err: Error) => {
                console.log("권한 없음");
              });
            }
          }
        });
      }, 10);
    }
  }, [login]);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () => documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  useEffect(() => {
    getInfoCallback();
  }, [getInfoCallback]);

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
      />
    </>
  );
};

export default observer(HeaderContainer);
