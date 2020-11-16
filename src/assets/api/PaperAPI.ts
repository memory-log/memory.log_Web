import axios from "axios";
import { SERVER } from "../../config/config.json";

class PaperAPI {
  async GetPapers(hit?: boolean) {
    try {
      let url = `${SERVER}/paper/showPaper`;

      if (hit) {
        url += `?hit=${hit}`;
      }

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetMyPapers() {
    try {
      const url = `${SERVER}/paper/getMyPaper`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async SearchPaper(target: string) {
    try {
      const url = `${SERVER}/paper/searchPaper/?target=${target}`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new PaperAPI();
