import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import PaperCommentAPI from "../../assets/api/PaperCommentApi";
import UploadApi from "../../assets/api/UploadApi";
import PaperCommentType from "../../util/types/PaperComment";
import { Response, GetCommentsResponse, UploadImageResponse, GetCommentResponse } from "../../util/types/Response";

@autobind
class PaperCommentStore {
  @observable paperComments: PaperCommentType[] = [];
  @observable color: string = "#707070";
  @observable write: string = "text";
  @observable font: string = "NotoSansKR";
  @observable image: File | Blob | null = null;
  @observable imageUrl: string = "";
  @observable comment: string = "";
  @observable locationX: number = 0;
  @observable locationY: number = 0;
  @observable modifyIdx?: number;
  @observable selectedIdx?: number;
  @observable deleteIdx: number = 0;

  @action
  async createPaperComment(paperIdx: number) {
    try {
      const response: Response = await PaperCommentAPI.CreateComment(
        paperIdx,
        this.locationX,
        this.locationY,
        this.write === "text" ? this.comment : null,
        this.color,
        this.font,
        this.write === "text" ? null : this.imageUrl
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action 
  async handleDeletePaperComment(deleteIdx: number) {
    try {
      const response: Response = await PaperCommentAPI.DeleteComment(deleteIdx);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async handlePaperComments(idx: number): Promise<GetCommentsResponse> {
    try {
      const response: GetCommentsResponse = await PaperCommentAPI.GetComments(idx);

      this.paperComments = response.data.paperComments;
      this.selectedIdx = undefined;

      return new Promise((resolve: (response: GetCommentsResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async uploadImage() {
    try {
      const response: UploadImageResponse = await UploadApi.UploadImage(this.image!);

      this.imageUrl = response.data.fileName;

      return new Promise((resolve: (response: UploadImageResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action initPaperComments() {
    this.paperComments = [];
  }

  @action
  async getComment(commentIdx: number): Promise<GetCommentResponse> {
    try {
      const response: GetCommentResponse = await PaperCommentAPI.GetComment(commentIdx);

      if (response.data.paperComment.comment) {
        this.handleComment(response.data.paperComment.comment);
        this.handleColor(response.data.paperComment.color!);
        this.handleFont(response.data.paperComment.fontFamily!);
        this.handleWrite("text");
      } else if (response.data.paperComment.image) {
        this.handleImageUrl(response.data.paperComment.image);
        this.handleWrite("image");
      }

      this.handleLocationX(response.data.paperComment.location_x);
      this.handleLocationY(response.data.paperComment.location_y);

      return new Promise((resolve: (response: GetCommentResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  async modifyPaperComment(commentIdx: number) {
    try {
      const response: Response = await PaperCommentAPI.ModifyComment(
        commentIdx,
        this.locationX,
        this.locationY,
        this.write === "text" ? this.comment : null,
        this.color,
        this.font,
        this.write === "text" ? null : this.imageUrl
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  }

  @action
  handleColor(color: string) {
    this.color = color;
  }

  @action
  handleWrite(write: string) {
    this.write = write;
  }

  @action
  handleFont(font: string) {
    this.font = font;
  }

  @action
  handleComment(comment: string) {
    this.comment = comment;
  }

  @action
  handleLocationX(locationX: number) {
    this.locationX = locationX;
  }

  @action
  handleLocationY(locationY: number) {
    this.locationY = locationY;
  }

  @action
  handleImage(image: File | Blob) {
    this.image = image;
  }

  @action
  handleImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

  @action
  handleModifyIdx(idx?: number) {
    this.modifyIdx = idx;
  }

  @action
  handleSelectedIdx(idx: number) {
    this.selectedIdx = idx;
  }

  @action
  handleDeleteIdx(deleteIdx: number){
    this.deleteIdx = deleteIdx;
  }
}

export default PaperCommentStore;
