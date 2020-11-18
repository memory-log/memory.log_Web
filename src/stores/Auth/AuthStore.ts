import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "../../assets/api/AuthApi";
import { sha256 } from "js-sha256";
import { GetMyInfoResponse, LoginResponse, Response } from "../../util/types/Response";

@autobind
class AuthStore {
  @observable login: boolean = false;
  @observable show: boolean = false;
  @observable open: boolean = false;
  @observable page: boolean = true;
  @observable email: string = "";
  @observable name: string = "";
  @observable userIdx?: number;
  @observable profileImage: string = "";

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
  tryLogin = async (email: string, pw: string): Promise<LoginResponse> => {
    try {
      const response: LoginResponse = await AuthApi.Login(email, sha256(pw));

      if (response.status === 200) {
        this.login = true;
      }

      return new Promise((resolve: (response: LoginResponse) => void, reject) => {
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
  tryRegister = async (email: string, name: string, pw: string): Promise<Response> => {
    try {
      const response: Response = await AuthApi.Register(email, name, sha256(pw));

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  tryAccredit = async (email: string): Promise<Response> => {
    try {
      const response: Response = await AuthApi.Accredit(email);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getInfo = async (idx?: number): Promise<GetMyInfoResponse> => {
    try {
      const response: GetMyInfoResponse = await AuthApi.GetInfo(idx);

      if (response.status === 200) {
        this.name = response.data.name;
        this.userIdx = response.data.idx;
        this.profileImage = response.data.profileImage;
        this.email = response.data.email ? response.data.email : "";
        this.login = true;
      }

      return new Promise((resolve: (response: GetMyInfoResponse) => void, reject) => {
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
  tryLogOut = () => {
    this.login = false;
  };
}

export default AuthStore;
