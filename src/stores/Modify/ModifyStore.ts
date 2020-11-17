import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import ProfileAPI from "../../assets/api/ProfileAPI";
import { ModifyProfileImgResponse, Response } from "../../util/types/Response";

@autobind
class Modify {
  @observable modify: boolean = false;

  @action
  tryProfileModify = () => {
    this.modify = !this.modify;
  };

  @action
  closeModify = () => {
    this.modify = false;
  };
  @action
  handleModifyProfile = async (name?: string, profileImage?: string): Promise<Response> => {
    try {
      const response = await ProfileAPI.modifyProfile(name && name, profileImage && profileImage);

      if (response.status === 200) {
        this.modify = false;
      }

      return new Promise((resolve: (response: Promise<Response>) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      this.modify = false;

      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  handleModifyProfileImg = async (files: File): Promise<ModifyProfileImgResponse> => {
    try {
      const response: ModifyProfileImgResponse = await ProfileAPI.uploadProfileImage(files);

      // console.log(files);

      return new Promise((resolve: (response: ModifyProfileImgResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default Modify;
