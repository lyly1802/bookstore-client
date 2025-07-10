import { get, post,del,patch} from "../utils/request";
//import axios from "axios";
//thêm sách 
export const  book =async(option)=>{
    const result=await post("book",option);
    return result;
}
//lấy danh sách tất cả sách 
export const getListBook=async()=>{
    const res=await get("book");
    return res;
}
//xóa một cuốn sách theo book_id.
export const deleteBook=async(book_id)=>{
    const res= await del(`book/${book_id}`);
    return res
}
//cập Nhật
export const  updatebook =async(book_id,option)=>{
    const result= await patch(`book/${book_id}`,option);
    return result;
}


// export const uploadImage = async (formData) => {
//   const res = await axios.post("http://localhost:9999/api/v1/upload-cloud", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return res.data;
// };
