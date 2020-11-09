import AuthStore from "./Auth";
import HeaderStore from "./Header/HeaderStore";
import PostStore from "./Post";

const stores = {
  //
  AuthStore: new AuthStore(),
  HeaderStore: new HeaderStore(),
  PostStore: new PostStore()
};

export default stores;
