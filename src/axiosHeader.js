import axios from "axios";

// if (localStorage.getItem("userInfor")) {
const Auth = localStorage.getItem("userInfor");
const message = JSON.parse(Auth);
const token = message !== null ? message.message.token : "";
// }

const instance = axios.create({
  baseURL: "https://dcaapi.moodfor.codes",

  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Accept: "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
