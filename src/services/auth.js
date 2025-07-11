import axios from "axios";

//const API_URL = "http://localhost:9999/api/v1";
import{API_DOMAIN} from "../utils/request"

// Đăng ký người dùng mới
export const registerUser = (userData) => {
  return axios.post(`${API_DOMAIN}register`, userData);
};

// Đăng nhập người dùng thường (email + password)
export const loginUser = (userData) => {
  return axios.post(`${API_DOMAIN}login`, userData);
};

// Đăng nhập bằng Google (FE gửi token nhận từ Google)
export const loginWithGoogle = (token) => {
  return axios.post(`${API_DOMAIN}auth/google`, { token });
};

//gửi password qua email 
export const forgotPasswordApi = (email) => {
  return axios.post(`${API_DOMAIN}forgot-password`, { email });
};
