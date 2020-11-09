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
