import MemberType from "./Member";

export default interface PaperType {
  idx: number;
  member: MemberType;
  title: string;
  scope: string;
  code: string;
  likeCount: number;
  endTime: Date;
  like: boolean;
  createdAt: Date;
  updatedAt: Date;
}
