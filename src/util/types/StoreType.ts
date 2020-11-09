import AuthStore from "../../stores/Auth";
import PostStore from "../../stores/Post";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    PostStore: PostStore;
  };
};

export default StoreType;
