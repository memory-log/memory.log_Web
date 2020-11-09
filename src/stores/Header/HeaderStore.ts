import { autobind } from "core-decorators";
import { action, observable } from "mobx";

@autobind
class HeaderStore {
  @observable isMain: boolean = false;
  @observable tapState: number = 0;

  @action
  isMainHandler(state: boolean) {
    this.isMain = state;
  }

  @action
  tapClickHandler(idx: number) {
    this.tapState = idx;
  }
}

export default HeaderStore;
