import AuthStore from "../../stores/Auth";
import HeaderStore from "../../stores/Header/HeaderStore";
import PaperStore from "../../stores/Paper";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    HeaderStore: HeaderStore;
    PaperStore: PaperStore;
  };
};

export default StoreType;
