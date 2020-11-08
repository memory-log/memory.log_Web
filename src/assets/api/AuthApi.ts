import axios from "axios";
import { server } from "../../config/config.json";

class AuthApi {
  async Login(email: string, pw: string) {
    try {
      const url = `${server}/member/signin`;

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
      const url = `${server}/member/signup`;
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
}

export default new AuthApi();
