import axios from "axios";
import { SERVER } from "../../config/config.json";

class PaperCommentAPI {
  async CreateComment(
    paperIdx: number,
    locationX: number,
    locationY: number,
    comment?: string | null,
    color?: string,
    fontFamily?: string,
    image?: string | null
  ) {
    try {
      const url = `${SERVER}/paperComment/createPaperComment`;

      const body = {
        paperIdx,
        comment,
        fontFamily,
        color,
        image,
        locationX,
        locationY
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetComments(paperIdx: number) {
    try {
      const url = `${SERVER}/paperComment/show/${paperIdx}`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetComment(commentIdx: number) {
    try {
      const url = `${SERVER}/paperComment/showComment/${commentIdx}`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ModifyComment(
    commentIdx: number,
    locationX: number,
    locationY: number,
    comment?: string | null,
    color?: string,
    fontFamily?: string,
    image?: string | null
  ) {
    try {
      const url = `${SERVER}/paperComment/modify/${commentIdx}`;

      const body = {
        comment,
        fontFamily,
        color,
        image,
        locationX,
        locationY
      };

      const { data } = await axios.put(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new PaperCommentAPI();
