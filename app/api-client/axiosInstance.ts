// api-client/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
    // Add more headers here if needed (auth token etc.)
  },
});

export default axiosInstance;
