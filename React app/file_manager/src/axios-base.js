import axios from "axios";

const instance = axios.create({
  // baseURL: "https://interview.skizzle.email/",
  baseURL: "http://18.219.77.183:8000/api/",
});

export default instance;
