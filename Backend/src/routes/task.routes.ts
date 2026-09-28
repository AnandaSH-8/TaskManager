import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/get", getTasks);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
