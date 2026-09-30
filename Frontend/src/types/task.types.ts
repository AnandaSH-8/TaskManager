export interface TaskBody {
  _id: string;
  title: string;
  description: string;
  status: "TODO" | "DONE";
  linkedFile?: { data: { data: number[]; type: string }; contentType: string };
  deadline: Date | string;
}
