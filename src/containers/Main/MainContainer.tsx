import { observer } from "mobx-react";
import React, { useCallback, useEffect, useState } from "react";
import Main from "../../components/Main";
import useStore from "../../lib/hooks/useStore";
import PaperType from "../../util/types/Paper";
import axios from "axios";
import refresh from "../../lib/refresh";

interface GetPapersResponse {
  status: number;
  message: string;
  data: {
    Papers: PaperType[];
  };
}

const MainContainer = () => {
  const { store } = useStore();
  const { login } = store.AuthStore;
  const { tapState } = store.HeaderStore;
  const { papers, handleGetPapers, handleGetMyPapers } = store.PaperStore;

  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const requestHandleGetPapers = useCallback(
    async (hit?: boolean) => {
      setLoading(true);
      await handleGetPapers(hit && hit)
        .then((res: GetPapersResponse) => {
          if (res.data.Papers.length > 0) {
            setNotFound(false);
          } else {
            setNotFound(true);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [login]
  );

  const requestHandleGetMyPapers = useCallback(async () => {
    if (login) {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
      await handleGetMyPapers()
        .then((res: GetPapersResponse) => {
          if (res.data.Papers.length > 0) {
            setNotFound(false);
          } else {
            setNotFound(true);
          }
          setLoading(false);
        })
        .catch(async (err: Error) => {
          if (err.message.indexOf("410")) {
            if (await refresh()) {
              await handleGetMyPapers().then((res: GetPapersResponse) => {
                if (res.data.Papers.length > 0) {
                  setNotFound(false);
                } else {
                  setNotFound(true);
                }
                setLoading(false);
              });
            }
          }
        });
    } else {
      setNotFound(true);
    }
  }, [login]);

  useEffect(() => {
    switch (tapState) {
      case 0:
        requestHandleGetPapers();
        break;
      case 1:
        requestHandleGetPapers(true);
        break;
      case 2:
        requestHandleGetMyPapers();
        break;
    }
  }, [tapState, login]);

  return (
    <>
      <Main papers={papers} notFound={notFound} loading={loading} />
    </>
  );
};

export default observer(MainContainer);
