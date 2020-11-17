import AuthStore from "./Auth";
import HeaderStore from "./Header/HeaderStore";
import ModifyStore from "./Modify";
import PaperStore from "./Paper";
import PaperCommentStore from "./PaperComment";

const stores = {
  AuthStore: new AuthStore(),
  HeaderStore: new HeaderStore(),
  PaperStore: new PaperStore(),
  ModifyStore: new ModifyStore(),
  PaperCommentStore: new PaperCommentStore()
};

export default stores;
