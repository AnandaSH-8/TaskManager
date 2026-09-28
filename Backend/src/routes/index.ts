import express from "express";
import taskRoute from "./task.routes";
const router = express.Router();

router.use("/v1/task", taskRoute);

export default router;
