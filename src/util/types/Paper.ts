export default interface PaperType {
  idx: number;
  member: MemberType;
  title: string;
  scope: string;
  code: string;
  end_time: any;
  created_at: Date;
  updated_at: Date;
}

interface MemberType {
  idx: number;
  name: string;
  email: string;
}
