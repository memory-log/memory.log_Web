import axios from "axios";
import { SERVER } from "../../config/config.json";

class PaperCommentAPI {
  async CreateComment(paperIdx: number, locationX: number, locationY: number, comment?: string, fontFamily?: string, image?: string) {
    try {
      const url = `${SERVER}/paperComment/createPaperComment`;

      const body = {
        paperIdx, 
        comment,
        fontFamily,
        image,
        locationX,
        locationY
      }

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
}

export default new PaperCommentAPI();