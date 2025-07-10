import axios from "axios";

// Gửi ảnh lên server (Cloudinary hoặc server backend)
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("img", file);

  try {
    const res = await axios.post("http://localhost:9999/api/v1/upload-cloud", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.code === 200) {
      return res.data.data.img.path; // Trả về URL ảnh
    } else {
      throw new Error("Upload thất bại");
    }
  } catch (err) {
    console.error("Lỗi upload ảnh:", err);
    throw err;
  }
};
