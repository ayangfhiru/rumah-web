import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
