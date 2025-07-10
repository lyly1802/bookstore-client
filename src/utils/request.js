import axios from "axios";

const API_DOMAIN = "http://localhost:9999/api/v1/";
//path là phần đường dẫn sau api/v1/ trong URL.
//data là nội dung bạn gửi lên server, ví dụ như thông tin sách, người dùng, sản phẩm,
export const get = async (path) => {
  const response = await axios.get(API_DOMAIN + path);
  return response.data;
};

export const post = async (path, data) => {
  const response = await axios.post(API_DOMAIN + path, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const del = async (path) => {
  const response = await axios.delete(API_DOMAIN + path);
  return response.data;
};


export const patch = async (path, data) => {
  const response = await axios.patch(API_DOMAIN + path, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};



