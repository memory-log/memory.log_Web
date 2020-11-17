import { SERVER } from "../config/config.json"

const generateURL = (filename: string): string => {
    return `${SERVER}/${filename}`
}

export default generateURL;
