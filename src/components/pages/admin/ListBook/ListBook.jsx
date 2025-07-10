// import { useEffect, useState } from "react";
// import { getListBook } from "../../services/BookService";
// import { Row, Col, Card, Badge } from "antd";
//HIỆN THỊ DẠNG LƯỚI
// function ListBook() {
//   const [book, setBook] = useState([]); // ✅ fix lỗi map

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const res = await getListBook();
//         setBook(res?.data || []); // nếu API trả { data: [...] }
//       } catch (err) {
//         console.error("Lỗi khi fetch sách:", err);
//       }
//     };
//     fetchApi();
//   }, []);

//   return (
//     <div style={{ padding: 24 }}>
//       <h2>📚 Danh sách sách</h2>
//       <Row gutter={[20, 20]}>
//         {book.map((item) => (
//           <Col span={12} key={item.book_id}>
//             <Badge.Ribbon
//                 text={item.status ? "Còn sách" : "Hết sách"}
//                 color={item.status ? "green" : "red"}
//             >
//                 <Card title={item.book_name}>
//                 <p><strong>Hình sách:</strong> {item.img}</p>
//                 <p><strong>Mã sách:</strong> {item.book_id}</p>
//                 <p><strong>Giá:</strong> {item.price} đ</p>
//                 <p><strong>Danh mục:</strong> {item.cat_id}</p>
//                 <p><strong>NXB:</strong> {item.pub_id}</p>
//                 </Card>
//             </Badge.Ribbon>
//         </Col>

//         ))}
//       </Row>
//     </div>
//   );
// }

// export default ListBook;

//HIỂN THỊ DẠNG BẢNG
import { useEffect, useState } from "react";
import { getListBook } from "../../../../services/BookService";
import { Table, Tag } from "antd";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ListBook() {
 const [books, setBooks] = useState([]);//lưu danh sách sách lấy từ API.
const [loading, setLoading] = useState(true); //chỉ dùng cho Skeleton khi trang load lần đầu (hoặc refresh).

const fetchApi = async (showSkeleton = true) => {
  try {
    if (showSkeleton) setLoading(true); // Nếu showSkeleton === true, bật trạng thái loading → hiển thị các Skeleton.
    const res = await getListBook();//Gọi API lấy danh sách sách
    if (showSkeleton) await new Promise((r) => setTimeout(r, 1000));//Nếu đang dùng Skeleton→ chờ 1 giây để Skeleton hiển thị
    setBooks(res?.data || []);//Cập nhật dữ liệu vào bảng.
  } catch (err) {
    console.error("Lỗi khi fetch sách:", err);
  } finally {
    if (showSkeleton) setLoading(false);//Sau khi xong, tắt Skeleton nếu trước đó bật.
  }
};

useEffect(() => {
  fetchApi(); // Lần đầu -> có Skeleton,Nếu bạn gọi fetchApi() → showSkeleton sẽ mặc định bằng true.
}, []);

const handleReload = () => {
  fetchApi(false); // Reload -> không Skeleton
};


  const columns = [
    {
      title: "Mã sách",
      dataIndex: "book_id",
      key: "book_id",
      render: (text) => loading ? <Skeleton width={120} /> : text,
    },
    {
      title: "Tên sách",
      dataIndex: "book_name",
      key: "book_name",
      render: (text) => loading ? <Skeleton width={120} /> : text,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => loading ? <Skeleton width={80} /> : `${text} đ`,
    },
    {
      title: "Danh mục",
      dataIndex: "cat_id",
      key: "cat_id",
      render: (text) => loading ? <Skeleton width={80} /> : text,
    },
    {
      title: "NXB",
      dataIndex: "pub_id",
      key: "pub_id",
      render: (text) => loading ? <Skeleton width={80} /> : text,
    },
        {
        title: "Ảnh",
        dataIndex: "img",
        key: "img",
        render: (text) =>
          loading ? (
            <Skeleton
              active
              title={false}
              paragraph={{ rows: 1, width: 60 }}
              style={{ width: 60, height: 80 }}
            />
          ) : (
            <img
              src={text}
              alt="Ảnh sách"
              style={{ width: 120, height: 60, objectFit: "cover", borderRadius: 4 }}
            />
          ),
      },

    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => loading ? <Skeleton width={80} /> : text,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        loading ? (
          <Skeleton width={70} />
        ) : (
          <Tag color={status ? "green" : "red"}>
            {status ? "Còn sách" : "Hết sách"}
          </Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) =>
        loading ? (
          <Skeleton width={100} height={24} />
        ) : (
          <>
            <DeleteBook record={record} onReload={handleReload} />
            <UpdateBook record={record} onReload={handleReload} />
          </>
        ),
    },

  ];

  return (
    <SkeletonTheme baseColor="#e0f7fa" highlightColor="#b2ebf2">
      <div style={{ padding: 24 }}>
        {loading ? (
          <Skeleton height={32} width={200} style={{ marginBottom: 16 }} />
        ) : (
          <h2>📚 Danh sách sách</h2>
        )}

        <Table
          columns={columns}
          dataSource={
            loading
              ? [...Array(8)].map((_, i) => ({ book_id: `skeleton-${i}` }))
              : books} 
        rowKey="book_id"
          pagination={!loading}//chỉ hiển thị phân trang khi có dữ liệu thật.
          showHeader={!loading}//ẩn header khi đang loading để Skeleton mượt mà hơn.
        />
      </div>
    </SkeletonTheme>
  );
}

export default ListBook;

//HIỂN THỊ CẢ 2 DẠNG
// import { useEffect, useState } from "react";
// import { getListBook } from "../../services/BookService";
// import { Table, Tag, Row, Col, Card, Badge, Radio } from "antd";

// function ListBook() {
//   const [books, setBooks] = useState([]);
//   const [viewMode, setViewMode] = useState("table"); // hoặc "card"

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const res = await getListBook();
//         setBooks(res?.data || []);
//       } catch (err) {
//         console.error("Lỗi khi fetch sách:", err);
//       }
//     };
//     fetchApi();
//   }, []);

//   const columns = [
//     {
//       title: "Mã sách",
//       dataIndex: "book_id",
//       key: "book_id",
//     },
//     {
//       title: "Tên sách",
//       dataIndex: "book_name",
//       key: "book_name",
//     },
//     {
//       title: "Giá",
//       dataIndex: "price",
//       key: "price",
//       render: (text) => `${text} đ`,
//     },
//     {
//       title: "Danh mục",
//       dataIndex: "cat_id",
//       key: "cat_id",
//     },
//     {
//       title: "NXB",
//       dataIndex: "pub_id",
//       key: "pub_id",
//     },
//     {
//       title: "Trạng thái",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <Tag color={status ? "green" : "red"}>
//           {status ? "Còn sách" : "Hết sách"}
//         </Tag>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: 24 }}>
//       <h2>📚 Danh sách sách</h2>
//       <Radio.Group
//         value={viewMode}
//         onChange={(e) => setViewMode(e.target.value)}
//         style={{ marginBottom: 16 }}
//       >
//         <Radio.Button value="table">Hiển thị dạng bảng</Radio.Button>
//         <Radio.Button value="card">Hiển thị dạng thẻ</Radio.Button>
//       </Radio.Group>

//       {viewMode === "table" ? (
//         <Table columns={columns} dataSource={books} rowKey="book_id" />
//       ) : (
//         <Row gutter={[20, 20]}>
//           {books.map((item) => (
//             <Col span={12} key={item.book_id}>
//               <Badge.Ribbon
//                 text={item.status ? "Còn sách" : "Hết sách"}
//                 color={item.status ? "green" : "red"}
//               >
//                 <Card title={item.book_name}>
//                   <p><strong>Hình sách:</strong> {item.img}</p>
//                   <p><strong>Mã sách:</strong> {item.book_id}</p>
//                   <p><strong>Giá:</strong> {item.price} đ</p>
//                   <p><strong>Danh mục:</strong> {item.cat_id}</p>
//                   <p><strong>NXB:</strong> {item.pub_id}</p>
//                 </Card>
//               </Badge.Ribbon>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </div>
//   );
// }

// export default ListBook;
