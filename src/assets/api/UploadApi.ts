import axios from "axios";
import { SERVER } from "../../config/config.json";

class UploadApi {
  async UploadImage(image: File | Blob) {
    try {
      const url = `${SERVER}/upload/`;

      const formData = new FormData();
      formData.append("file", image);

      const { data } = await axios.post(url, formData);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new UploadApi();
