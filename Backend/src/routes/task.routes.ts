import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";
import upload from "../config/multerConfig";

const router = express.Router();

router.get("/get", getTasks);
router.post("/create", upload.single("pdf"), createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
