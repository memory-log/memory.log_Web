import AuthStore from "./Auth";
import PostStore from "./Post";

const stores = {
  //
  AuthStore: new AuthStore(),
  PostStore: new PostStore()
};

export default stores;
