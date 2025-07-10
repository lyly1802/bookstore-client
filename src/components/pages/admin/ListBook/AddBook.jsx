import { Typography,Form } from "antd";
import { toast } from "react-toastify";
import { book } from "../../../../services/BookService";
import BookForm from "./BookForm";
const { Title } = Typography;

const AddBook = () => {
  const [form] = Form.useForm();//b1:Tạo ra một form 

  const handleSubmit = async (values) => {
    try {
      const res = await book(values);
      console.log(res); 
      if (res?.data) {
        form.resetFields();
        toast.success("Thêm sách thành công!");
      } else {
        toast.error(res?.mess || "Thêm sách thất bại!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Thêm sách thất bại. Vui lòng thử lại!");
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>📘 Thêm sách mới</Title>
      <BookForm form={form} onFinish={handleSubmit} />
    </div>
  );
};
//Gọi BookForm và truyền form và onFinish,
// AdminBookPage
//   └── render BookForm với form + handleSubmit
//         └── Form render => isEdit = false => Hiện nút "Thêm sách mới"
//               └── Người dùng submit => gọi handleSubmit
//                     └── Gọi API => Hiển thị kết quả => Reset form nếu thành công
export default AddBook;
