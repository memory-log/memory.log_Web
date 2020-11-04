import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "../../assets/api/AuthApi";
import { sha256 } from "js-sha256";

export interface LoginType {
  message: number;
  status: number;
  refreshToken: string;
  accessToken: string;
}

@autobind
class AuthStore {
  @observable login: boolean = false;
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

  @action
  tryLogin = async (email: string, pw: string): Promise<LoginType> => {
    try {
      const response: LoginType = await AuthApi.Login(email, sha256(pw));

      if (response.status === 200) {
        this.login = true;
        localStorage.setItem("token", response.accessToken);
      }

      return new Promise((resolve: (response: LoginType) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      this.login = false;
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  tryRegister = async (email: string, name: string, pw: string): Promise<ResponseType> => {
    try {
      const response: ResponseType = await AuthApi.Register(email, name, sha256(pw));

      return new Promise((resolve: (response: ResponseType) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      this.login = false;
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default AuthStore;
