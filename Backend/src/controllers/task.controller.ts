import { Request, Response } from "express";
import TaskService from "../services/task.service";
import HttpStatus from "http-status";

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskService.getTasks();
    return res.status(HttpStatus.OK).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error fetching tasks",
    });
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const taskData = req.body;
    const linkedFile = req.file
      ? {
          data: Buffer.from(req.file.buffer),
          contentType: req.file.mimetype,
        }
      : null;

    const newTask = await TaskService.createTask(taskData, linkedFile);
    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: newTask,
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error creating task",
    });
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const taskData = req.body;
    const updatedTask = await TaskService.updateTask(taskData, taskId);
    return res.status(HttpStatus.OK).json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error updating task",
    });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    await TaskService.deleteTask(taskId);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error deleting task",
    });
  }
};

export { getTasks, createTask, updateTask, deleteTask };
