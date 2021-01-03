import axios from "axios";

const instance = axios.create({
  // baseURL: "https://interview.skizzle.email/",
  baseURL: "http://localhost:8000/api/",
});

export default instance;
