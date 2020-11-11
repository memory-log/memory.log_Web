import AuthStore from "./Auth";
import HeaderStore from "./Header/HeaderStore";
import PaperStore from "./Paper";
import ProfileBoxStore from "./ProfileBox";

const stores = {
  AuthStore: new AuthStore(),
  HeaderStore: new HeaderStore(),
  PaperStore: new PaperStore(),
  ProfileBoxStore: new ProfileBoxStore()
};

export default stores;
