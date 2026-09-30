import { useState, useEffect } from "react";
import { getTasks } from "../api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const refreshTasks = async () => {
    setLoading(true);
    const { data } = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  return { tasks, loading, refreshTasks };
};
