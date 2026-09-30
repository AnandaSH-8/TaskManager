import axiosApi from "./axios";
import type { TaskBody } from "../types/task.types";

const tryCatch = async <T>(
  fn: () => Promise<T>,
  errorMsg: string,
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    console.error(errorMsg, error);
    throw error;
  }
};

const getTasks = async () =>
  tryCatch(
    () => axiosApi.get(`/get`).then((r) => r.data),
    "Error fetching task:",
  );

const createTask = async (taskData: TaskBody | FormData) =>
  tryCatch(
    () => axiosApi.post(`/create`, taskData).then((r) => r.data),
    "Error creating task:",
  );

const updateTask = async (id: string, taskData: Partial<TaskBody>) =>
  tryCatch(
    () => axiosApi.put(`/update/${id}`, taskData).then((r) => r.data),
    "Error updating task:",
  );

const deleteTask = async (id: string) =>
  tryCatch(
    () => axiosApi.delete(`/delete/${id}`).then((r) => r.data),
    "Error deleting task:",
  );

export { getTasks, createTask, updateTask, deleteTask };
