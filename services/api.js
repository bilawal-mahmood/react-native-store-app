import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.100.232:5000/api", // ⚠️ CHANGE THIS
});

export default API;