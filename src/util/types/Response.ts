import PaperType from "./Paper";
import PaperCommentType from "./PaperComment";

export type Response = {
  status: number;
  message: string;
};

export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface RefreshTokenResponse extends Response {
  data: {
    accessToken: string;
  };
}

export interface GetMyInfoResponse extends Response {
  data: {
    email: string;
    name: string;
  };
}

export interface GetPapersResponse extends Response {
  data: {
    Papers: PaperType[];
  };
}

export interface GetPaperResponse extends Response {
  data: {
    Papers: PaperType;
  }
}

export interface GetCommentsResponse extends Response {
  data: {
    paperComments: PaperCommentType[];
  }
}

export interface UploadImageResponse extends Response {
  data: {
    fileName: string;
  }
}
