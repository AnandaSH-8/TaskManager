import { useState } from "react";
import { createTask, updateTask } from "../api";
import type { TaskBody } from "../types/task.types";

export const useTaskManager = () => {
  const [taskData, setTaskData] = useState<TaskBody | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setTaskData({
      _id: "",
      title: "",
      description: "",
      deadline: "",
      status: "TODO",
    });
    setFile(null);
    setOpen(true);
  };

  const handleEditClick = (task: TaskBody) => {
    setIsEditing(true);
    setTaskData(task);
    setFile(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTaskData(null);
    setFile(null);
  };

  const handleSave = async (refreshTasks: () => void) => {
    const formData = new FormData();
    if (!taskData) return;
    formData.append("title", taskData.title);
    formData.append("description", taskData.description);
    formData.append(
      "deadline",
      taskData.deadline instanceof Date
        ? taskData.deadline.toISOString()
        : taskData.deadline,
    );

    formData.append("status", taskData.status);
    if (file) formData.append("pdf", file);

    console.log(formData, "Form Data");

    try {
      if (isEditing) {
        await updateTask(taskData._id, {
          title: taskData.title,
          description: taskData.description,
          deadline: taskData.deadline,
        });
      } else {
        await createTask(formData);
      }
      await refreshTasks();
      handleClose();
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };

  const handleFileChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { files: FileList | null } },
  ) => {
    if (event.target.files && event.target.files.length) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  return {
    taskData,
    file,
    isEditing,
    open,
    handleAddClick,
    handleEditClick,
    handleClose,
    handleSave,
    handleFileChange,
    setTaskData,
  };
};
