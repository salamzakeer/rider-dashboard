import axios from "axios";

const instance = axios.create({
  baseURL: "https://dcaapi.moodfor.codes",

  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Accept: "multipart/form-data",
  },
});

export default instance;
