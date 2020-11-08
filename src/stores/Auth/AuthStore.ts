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
  @observable show: boolean = false;
  @observable open: boolean = false;
  @observable page: boolean = true;

  @action
  showModal() {
    if (this.show) {
      setTimeout(() => {
        this.show = !this.show;
      }, 500);
    } else {
      this.show = !this.show;
    }
    this.open = !this.open;
    this.page = true;
  }

  @action
  changePage() {
    this.page = !this.page;
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
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
  @action
  tryAccredit = async (email: string): Promise<ResponseType> => {
    try {
      const response: ResponseType = await AuthApi.Accredit(email);

      return new Promise((resolve: (response: ResponseType) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default AuthStore;
