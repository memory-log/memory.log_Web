import axios from "axios";
import { SERVER } from "../../config/config.json";

class AuthApi {
  async Login(email: string, pw: string) {
    try {
      const url = `${SERVER}/member/signIn`;

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
      const url = `${SERVER}/member/signUp`;
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
      const url = `${SERVER}/member/email/code`;

      const body = {
        email
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetInfo(idx?: number) {
    try {
      let url = "";
      idx ? (url = `${SERVER}/member/getOtherInfo?idx=${idx}`) : (url = `${SERVER}/member/getInfo`);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      };

      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async RefreshToken(refreshToken: string) {
    try {
      const url = `${SERVER}/member/token`;

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
