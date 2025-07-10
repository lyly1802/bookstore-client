import { Form, Input, InputNumber, Select, Switch, Button, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
//import { useState } from "react";
//import axios from "axios";
import UploadImage from "../../admin/ListBook/UploadImage"

const categories = [
  { value: "td", label: "Từ điển" },
  { value: "vh", label: "Văn học" },
  { value: "kt", label: "Kinh tế" },
];

function BookForm({ form, onFinish, initialValues = {}, isEdit = false }) {
  // const [fileList, setFileList] = useState([]);

  // const handleCustomUpload = async ({ file, onSuccess, onError }) => {
  //   const formData = new FormData();
  //   formData.append("img", file);

  //   try {
  //     const res = await axios.post("http://localhost:9999/api/v1/upload-cloud", formData);

  //     if (res.data.code === 200) {
  //       const imageUrl = res.data.data.img.path;
  //       console.log(imageUrl);
  //       form.setFieldsValue({ img: imageUrl });

  //       setFileList([
  //         {
  //           uid: "-1",
  //           name: file.name,
  //           status: "done",
  //           url: imageUrl,
  //         },
  //       ]);

  //       onSuccess("OK");
  //       message.success("Tải ảnh thành công");
  //     } else {
  //       throw new Error("Upload thất bại");
  //     }
  //   } catch (err) {
  //     console.error("Lỗi upload ảnh:", err);
  //     onError(err);
  //     message.error("Lỗi khi tải ảnh");
  //   }
  // };

  return (
    <Form layout="vertical" form={form} initialValues={initialValues} onFinish={onFinish}>
      <Form.Item label="Mã sách" name="book_id" rules={[{ required: true, message: "Vui lòng nhập mã sách" }]}>
        <Input disabled={isEdit} />
      </Form.Item>

      <Form.Item label="Tên sách" name="book_name" rules={[{ required: true, message: "Vui lòng nhập tên sách" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Giá" name="price" rules={[{ required: true, message: "Vui lòng nhập giá" }]}>
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      {/*Trường ẩn để lưu URL ảnh trong form */}
       <Form.Item name="img" hidden>
        <Input />
      </Form.Item>

      {/* <Form.Item label="Ảnh">
        <Upload
          customRequest={handleCustomUpload}
          listType="picture"
          fileList={fileList}
          maxCount={1}
          onChange={({ fileList }) => setFileList(fileList)}
          accept="image/*"
        >
          {fileList.length < 1 && (
            <Button icon={<UploadOutlined />}>Tải ảnh</Button>
          )}
        </Upload>
      </Form.Item>  */}
      <Form.Item label="Ảnh bìa">
        <UploadImage form={form} name="img" label="Tải ảnh sách" />
      </Form.Item>

      <Form.Item label="Mã NXB" name="pub_id" rules={[{ required: true, message: "Vui lòng nhập mã NXB" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Danh mục" name="cat_id" rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}>
        <Select placeholder="Chọn danh mục" options={categories} />
      </Form.Item>

      <Form.Item valuePropName="checked" label="Trạng thái" name="status">
        <Switch checkedChildren="Còn sách" unCheckedChildren="Hết sách" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
          {isEdit ? "Cập nhật" : "Thêm sách mới"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BookForm;
