import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import PaperCommentAPI from "../../assets/api/PaperCommentApi";
import UploadApi from "../../assets/api/UploadApi";
import PaperCommentType from "../../util/types/PaperComment";
import { Response, GetCommentsResponse, UploadImageResponse } from "../../util/types/Response";

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

    @action
    async creaetePaperComment( 
      color: string, 
      comment: string, 
      fontfamily: string, 
      image: string, 
      locationX: number, 
      locationY: number, 
      paperIdx: number
      ){
        try {
          const response: Response = await PaperCommentAPI.CreateComment(paperIdx, locationX, locationY, comment, color, fontfamily, image);

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
  async handlePaperComments(idx: number) {
    try {
      const response: GetCommentsResponse = await PaperCommentAPI.GetComments(idx);

      this.paperComments = response.data.paperComments;

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
}

export default PaperCommentStore;
