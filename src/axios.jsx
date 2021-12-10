import axios from "axios";
import backend_base_url from "./settings";

const axiosInstance = axios.create({
  baseURL: backend_base_url + "/",
});

export default axiosInstance;
