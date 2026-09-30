import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8082/api/v1/task",
});

export default axiosInstance;
