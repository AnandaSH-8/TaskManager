import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://taskmanager-hkvr.onrender.com/api/v1/task",
});

export default axiosInstance;
