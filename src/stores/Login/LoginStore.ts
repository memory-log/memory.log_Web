import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class LoginStore {
  @observable isModalSelected: boolean = false;

  @action
  selectLoginModal() {
    this.isModalSelected = !this.isModalSelected;
    console.log(this.isModalSelected);
  }
}

export default LoginStore;
