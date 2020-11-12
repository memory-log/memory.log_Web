import AuthStore from "./Auth";
import HeaderStore from "./Header/HeaderStore";
import PaperStore from "./Paper";

const stores = {
  AuthStore: new AuthStore(),
  HeaderStore: new HeaderStore(),
  PaperStore: new PaperStore()
};

export default stores;
