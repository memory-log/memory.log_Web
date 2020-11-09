import { autobind } from "core-decorators";
import { action, observable } from "mobx";

@autobind
class PostStore {
  @observable tapState: number = 0;

  @action
  tapClickHandler(idx: number) {
    this.tapState = idx;
  }
}

export default PostStore;
