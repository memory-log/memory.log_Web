import axios from "axios";
import { server } from "../../config/config.json";

class AuthApi {
  async Login(email: string, pw: string) {
    try {
      const url = `${server}/member/signIn`;

      const body = {
        email,
        pw
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async Register(email: string, name: string, pw: string) {
    try {
      const url = `${server}/member/signUp`;
      const body = {
        email,
        name,
        pw
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async Accredit(email: string) {
    try {
      const url = `${server}/member/email/code`;

      const body = {
        email
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetInfo() {
    try {
      const url = `${server}/member/getInfo`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async RefreshToken(refreshToken: string) {
    try {
      const url = `${server}/member/token`;

      const body = {
        refreshToken
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AuthApi();
