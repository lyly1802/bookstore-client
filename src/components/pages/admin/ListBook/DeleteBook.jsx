import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteBook } from "../../../../services/BookService";
import { toast } from "react-toastify";

function DeleteBook(props) {
      const { record,onReload } = props;

       const handleDelete = async() => {
        const res=await deleteBook(record.book_id);
        if(res){
         onReload();
         toast.success("Xóa thành công!");

        }else{
         toast.error("Xóa thất bại!");

        }
  };

    return ( 
       <Popconfirm title="Bạn có muốn xóa không?" onConfirm={handleDelete}>
       <Tooltip title=" Xóa" color="cyan">
            <Button danger size="small" icon={<DeleteOutlined />} />
       </Tooltip>
    </Popconfirm>
     );
}

export default DeleteBook;