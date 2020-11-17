import MemberType from "./Member";
import PaperType from "./Paper";

export default interface PaperCommentType {
    idx: number;
    member: MemberType;
    paper: PaperType;
    fontFamily?: string;
    comment?: string;
    image?: string;
    location_x: number;
    location_y: number;
    created_at: Date;
    updated_at?: Date;
    color?: string;
}