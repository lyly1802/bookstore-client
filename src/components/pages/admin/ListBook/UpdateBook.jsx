import { Button, Modal, Typography, Spin, Form, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updatebook } from "../../../../services/BookService";
import { toast } from "react-toastify";
import BookForm from "../ListBook/BookForm";

function UpdateBook({ record, onReload }) {
  const [showModal, setShowModal] = useState(false);
  const [spinning, setSpinning] = useState(false); //b1:cho nó bằng false
  const [form] = Form.useForm();

  const handleShowModal = () => {
    setShowModal(true); // Mở modal
  };

  const handleCancel = () => {
    setShowModal(false); //// Đóng modal
    form.resetFields(); // Xóa dữ liệu đang nhập (nếu có)
  };

  const handleSubmit = async (values) => {
    setSpinning(true); //khi bấm vào cập nhập nó sẽ hiện loading
    try {
      //Gọi API cập nhật sách với book_id là ID gốc, values là dữ liệu người dùng sửa.
      const res = await updatebook(record.book_id, values);
      setTimeout(() => {
        if (res?.data) {
          toast.success("Cập nhật thành công!"); //// Hiện thông báo
          setShowModal(false);
          onReload(); // Load lại danh sách sách
        } else {
          toast.error(res?.mess || "Cập nhật thất bại!");
        }
        setSpinning(false); //sau 3s thì // Ẩn hiệu ứng loading
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Cập nhật thất bại. Vui lòng thử lại!");
      setSpinning(false);
    }
  };

  return (
    <>
      <Tooltip title="Sửa" color="cyan">
        <Button
          size="small"
          type="primary"
          icon={<EditOutlined />}
          onClick={handleShowModal}
        />
      </Tooltip>

      <Modal
        title="Chỉnh sửa sách"
        open={showModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Spin spinning={spinning} tip="Đang cập nhật...">
          <BookForm
            form={form}
            onFinish={handleSubmit}
            initialValues={record}
            isEdit
          />
        </Spin>
      </Modal>
    </>
  );
}
/**
 * B1:User click vào icon "✏️" → mở Modal
 * B2️:Modal hiển thị form với dữ liệu cũ từ record
 * B3:User chỉnh sửa rồi click nút "Cập nhật"
 * B4:handleSubmit được gọi → gọi API update
 * B5:Nếu thành công → Hiện thông báo, đóng modal, gọi onReload()
 * B6:Nếu thất bại → Hiện thông báo lỗi
 */
export default UpdateBook;
