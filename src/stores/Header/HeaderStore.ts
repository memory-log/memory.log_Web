import { autobind } from "core-decorators";
import { action, observable } from "mobx";

@autobind
class HeaderStore {
  @observable tapState: number = 0;

  @action
  tapClickHandler(idx: number) {
    this.tapState = idx;
  }
}

export default HeaderStore;
