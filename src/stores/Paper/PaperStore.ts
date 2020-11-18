import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import PaperAPI from "../../assets/api/PaperAPI";
import PaperType from "../../util/types/Paper";
import { GetPaperResponse, GetPapersResponse } from "../../util/types/Response";

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
  @observable searchedByName: PaperType[] = [];
  @observable searchedByTitle: PaperType[] = [];
  @observable paperInfo?: PaperType;

  @action
  handleGetPaperInfo(paperInfo: PaperType) {
    this.paperInfo = paperInfo;
  }

  @action
  async handleGetPapers(hit?: boolean): Promise<GetPapersResponse> {
    try {
      const response: GetPapersResponse = await PaperAPI.GetPapers(hit && hit);
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
  async handleSearchPaper(target: string): Promise<SearchPaperResponse> {
    try {
      const response: SearchPaperResponse = await PaperAPI.SearchPaper(target);

      this.searchedByName = response.data.SearchedByName;
      this.searchedByTitle = response.data.SearchedByTitle;

      return new Promise((resolve: (response: SearchPaperResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async handlePaperInfo(idx?: number, code?: string): Promise<GetPaperResponse> {
    try {
      if (!idx && !code) {
        throw new Error();
      }
      const response: GetPaperResponse = await PaperAPI.GetPapers(undefined, idx, code);
      this.paperInfo = response.data.Papers;

      return new Promise((resolve: (response: GetPaperResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async handleLikePaper(idx: number) {
    try {
      const response: Response = await PaperAPI.LikePaper(idx);

      return new Promise((resolve: (response: Response) => void, reject) => {
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
