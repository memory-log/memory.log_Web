import AuthStore from "../../stores/Auth";
import HeaderStore from "../../stores/Header";
import PaperStore from "../../stores/Paper";
import PaperCommentStore from "../../stores/PaperComment";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    HeaderStore: HeaderStore;
    PaperStore: PaperStore;
    PaperCommentStore: PaperCommentStore;
  };
};

export default StoreType;
