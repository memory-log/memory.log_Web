import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import PaperAPI from "../../assets/api/PaperAPI";
import PaperType from "../../util/types/Paper";

interface GetPapersResponse {
  status: number;
  message: string;
  data: {
    Papers: PaperType[];
  };
}

@autobind
class PaperStore {
  @observable papers: PaperType[] = [];

  @action
  async handleGetPapers(): Promise<GetPapersResponse> {
    try {
      const response: GetPapersResponse = await PaperAPI.GetPapers();
      this.papers = response.data.Papers;

      return new Promise((resolve: (response: GetPapersResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async handleGetMyPapers(): Promise<GetPapersResponse> {
    try {
      const response: GetPapersResponse = await PaperAPI.GetMyPapers();
      this.papers = response.data.Papers;

      return new Promise((resolve: (response: GetPapersResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }
}

export default PaperStore;
