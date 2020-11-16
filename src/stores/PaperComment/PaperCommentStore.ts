import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import PaperCommentAPI from "../../assets/api/PaperCommentApi";
import PaperCommentType from "../../util/types/PaperComment";
import { GetCommentsResponse } from "../../util/types/Response";

@autobind
class PaperCommentStore {
    @observable paperComments: PaperCommentType[] = [];

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
}

export default PaperCommentStore;
