import axios from "axios";

const axiosToken = axios.create({
  baseURL: "http://localhost:5000/api"
});

axiosToken.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("token");
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
export default axiosToken;
