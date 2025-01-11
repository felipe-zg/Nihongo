import axios from "axios";

export const axiosinstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});