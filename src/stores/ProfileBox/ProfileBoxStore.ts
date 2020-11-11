import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class ProfileBoxStore {
  @observable profileBox: boolean = true;
}

export default ProfileBoxStore;
