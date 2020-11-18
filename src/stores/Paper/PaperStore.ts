import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import PaperAPI from "../../assets/api/PaperAPI";
import UploadApi from "../../assets/api/UploadApi";
import PaperType from "../../util/types/Paper";
import { CreatePaperResponse, GetPaperResponse, GetPapersResponse, UploadImageResponse } from "../../util/types/Response";

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
  async handlePaperImage(thumbnail: File): Promise<UploadImageResponse> {
    try {
      const response: UploadImageResponse = await UploadApi.UploadImage(thumbnail);

      return new Promise((resolve: (response: UploadImageResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async handleCreatePaper(
    endTime: Date,
    scope: string,
    title: string,
    backgroundColor: string,
    thumbnail?: string
  ): Promise<CreatePaperResponse> {
    try {
      const response: CreatePaperResponse = await PaperAPI.CreatePaper(endTime, scope, title, backgroundColor, thumbnail);

      return new Promise((resolve: (response: CreatePaperResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
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
