import HttpStatus from "http-status";
import TaskSchema from "../models/task.model";

interface taskBody {
  title: string;
  description: string;
  status: InstanceType<typeof TaskSchema>["status"];
  linkedFile?: { data: Buffer; contentType: string };
  deadline: Date;
}

const getTasks = async () => {
  try {
    const tasks = await TaskSchema.find({});
    return tasks;
  } catch (error) {
    throw new Error("Error fetching tasks");
  }
};

const createTask = async (
  body: taskBody,
  linkedFile: taskBody["linkedFile"] | null,
) => {
  try {
    if (linkedFile) {
      body.linkedFile = linkedFile;
    }
    const newTask = await TaskSchema.create(body);
    return newTask;
  } catch (error) {
    throw new Error("Error creating task");
  }
};

const updateTask = async (body: Partial<taskBody>, id: string) => {
  try {
    const updatedTask = await TaskSchema.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updatedTask;
  } catch (error) {
    throw new Error("Error updating task");
  }
};

const deleteTask = async (id: string) => {
  try {
    await TaskSchema.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting task");
  }
};

const TaskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default TaskService;
