import { SERVER } from "../config/config.json";

const generateURL = (filename: string): string => {
  return `${SERVER}/upload/${filename}`;
};

export default generateURL;
