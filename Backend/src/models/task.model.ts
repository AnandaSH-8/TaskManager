import mongoose, { Schema, Document } from "mongoose";

export enum TaskStatus {
  TODO = "TODO",
  DONE = "DONE",
}

export interface ITask extends Document {
  title: string;
  description: string;
  status: TaskStatus;
  linkedFile?: Buffer;
  createdOn: Date;
  deadline: Date;
}

const taskSchema: Schema<ITask> = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.TODO,
    },
    linkedFile: { type: Buffer },
    createdOn: { type: Date, default: Date.now },
    deadline: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
