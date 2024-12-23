import axios from "axios";

const instance = axios.create({
  // baseURL:"http://localhost:5000",
  baseURL: process.env.REACT_APP_API_URL || "http://backend:5000",
});

export default instance;
