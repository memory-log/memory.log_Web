import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class AuthStore {
  @observable isModalSelected: boolean = false;
  @observable isPageChanged: boolean = true;

  @action
  selectModal() {
    this.isModalSelected = !this.isModalSelected;
    this.isPageChanged = true;
  }

  @action
  changePage() {
    this.isPageChanged = !this.isPageChanged;
  }
}

export default AuthStore;
