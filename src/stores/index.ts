import AuthStore from "./Auth";
import HeaderStore from "./Header";
import PaperStore from "./Paper";
import PaperCommentStore from "./PaperComment";

const stores = {
  AuthStore: new AuthStore(),
  HeaderStore: new HeaderStore(),
  PaperStore: new PaperStore(),
  PaperCommentStore: new PaperCommentStore()
};

export default stores;
