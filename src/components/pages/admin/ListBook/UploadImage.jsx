// src/components/UploadImage.jsx
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { uploadImage } from "../../../../services/uploadService";

const UploadImage = ({ form, name = "img", label = "Ảnh", maxCount = 1 }) => {
  const [fileList, setFileList] = useState([]);

  const handleCustomUpload = async ({ file, onSuccess, onError }) => {
    try {
      const imageUrl = await uploadImage(file);

      // ✅ Gán URL ảnh vào form (trường name mặc định là "img")
      form.setFieldsValue({ [name]: imageUrl });

      // ✅ Hiển thị thumbnail ảnh
      setFileList([
        {
          uid: "-1",
          name: file.name,
          status: "done",
          url: imageUrl,
        },
      ]);

      onSuccess("OK");
      message.success("Tải ảnh thành công");
    } catch (err) {
      onError(err);
      message.error("Tải ảnh thất bại");
    }
  };

  return (
    <>
     
      <Upload
        customRequest={handleCustomUpload}
        listType="picture"
        fileList={fileList}
        maxCount={maxCount}
        onChange={({ fileList }) => setFileList(fileList)}
        accept="image/*"
      >
        {fileList.length < maxCount && (
          <Button icon={<UploadOutlined />}>{label}</Button>
        )}
      </Upload>
    </>
  );
};

export default UploadImage;
