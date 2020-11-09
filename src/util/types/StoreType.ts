import AuthStore from "../../stores/Auth";
import HeaderStore from "../../stores/Header/HeaderStore";
import PostStore from "../../stores/Post";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    HeaderStore: HeaderStore;
    PostStore: PostStore;
  };
};

export default StoreType;
