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

interface SearchPaperResponse {
  status: number;
  message: string;
  data: {
    SearchedByName: PaperType[];
    SearchedByTitle: PaperType[];
  };
}

@autobind
class PaperStore {
  @observable papers: PaperType[] = [];
  @observable search: PaperType[] = [];
  @observable filter: string = "";

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

  @action
  handleFilter(state: string) {
    this.filter = state;
  }

  @action
  async handleSearchPaper(target: string): Promise<SearchPaperResponse> {
    try {
      const response: SearchPaperResponse = await PaperAPI.SearchPaper(target);

      if (this.filter === "") {
        this.search = response.data.SearchedByTitle;

        const promise: Promise<void>[] = [];
        response.data.SearchedByName.map((name) => {
          promise.push(
            new Promise((resolve, reject) => {
              this.search = [...this.search, name];
              resolve();
            })
          );
        });
        await Promise.all(promise);
      } else if (this.filter === "title") {
        this.search = response.data.SearchedByTitle;
      } else if (this.filter === "name") {
        this.search = response.data.SearchedByName;
      }

      return new Promise((resolve: (response: SearchPaperResponse) => void, reject) => {
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
