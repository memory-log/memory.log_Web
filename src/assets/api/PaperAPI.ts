import axios from "axios";
import { SERVER } from "../../config/config.json";

class PaperAPI {
  async CreatePaper(endTime: Date, scope: string, title: string, backgroundColor: string, thumbnail?: string) {
    try {
      const url = `${SERVER}/paper/createPaper`;

      const body = {
        backgroundColor,
        endTime,
        scope,
        thumbnail,
        title
      };

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
      }

      const { data } = await axios.post(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ModifyPaper(paperIdx: number, endTime: Date, scope: string, title: string, backgroundColor: string, thumbnail?: string) {
    try {
      const url = `${SERVER}/paper/modifyPaper/${paperIdx}`;

      const body = {
        backgroundColor,
        endTime,
        scope,
        thumbnail,
        title
      };

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
      }

      const { data } = await axios.put(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetPapers(hit?: boolean, idx?: number, code?: string) {
    try {
      let url = `${SERVER}/paper/showPaper`;

      if (hit) {
        url += `?hit=${hit}`;
      }

      if (idx && code) {
        url += `?paper_idx=${idx}&code=${code}`;
      } else if (idx) {
        url += `?paper_idx=${idx}`;
      }

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
      }

      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetMyPapers() {
    try {
      const url = `${SERVER}/paper/getMyPaper`;

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

  async SearchPaper(target: string) {
    try {
      const url = `${SERVER}/paper/searchPaper?target=${target}`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
      }

      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async LikePaper(idx: number) {
    try {
      const url = `${SERVER}/paperLike/updateLike?paper_idx=${idx}`;
      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
      }

      const { data } = await axios.post(url, {}, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async DeletePaper(paperIdx: number) {
    try {
      const url = `${SERVER}/paper/deletePaper/${paperIdx}`;
      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        };
      }

      const { data } = await axios.delete(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new PaperAPI();
