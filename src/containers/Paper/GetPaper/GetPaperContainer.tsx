import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import GetPaper from "../../../components/Paper/GetPaper/GetPaper";
import useQuery from "../../../lib/hooks/useQuery";
import useStore from "../../../lib/hooks/useStore";
import { GetPaperResponse } from "../../../util/types/Response";
import { useHistory, useLocation } from "react-router-dom";

const GetPaperContainer = ({}) => {
  const { store } = useStore();
  const { handlePaperInfo, paperInfo } = store.PaperStore;

  const [loading, setLoading] = useState<boolean>(false);

  const query = useQuery();
  const history = useHistory();
  const { search } = useLocation();

  const handlePaperInfoCallback = useCallback(async () => {
    if (query.get("idx") || query.get("code")) {
      setLoading(true);
      handlePaperInfo(Number(query.get("idx")), query.get("code") || undefined)
        .then((res: GetPaperResponse) => {
          if (!res.data.Papers || !res.data.Papers.member) {
            history.push("/");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          history.push("/");
          setLoading(false);
        });
    } else {
      history.push("/");
    }
  }, [search]);

  useEffect(() => {
    handlePaperInfoCallback();
  }, [handlePaperInfoCallback]);

  return (
    <>
      <GetPaper loading={loading} paperInfo={paperInfo} />
    </>
  );
};

export default observer(GetPaperContainer);
