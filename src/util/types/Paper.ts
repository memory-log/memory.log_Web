import MemberType from "./Member";

export default interface PaperType {
  idx: number;
  member: MemberType;
  title: string;
  scope: string;
  code: string;
  likeCount: number;
  end_time: any;
  created_at: Date;
  updated_at: Date;
}
