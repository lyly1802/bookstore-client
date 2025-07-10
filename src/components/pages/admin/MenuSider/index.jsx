import { Menu } from "antd";
import {
  BookOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: "Quản lý sách",
      key: "book-management",
      icon: <BookOutlined />,
      children: [
        {
          label: <Link to="/admin/books">Thêm sách</Link>,
          key: "/admin/books",
          icon: <UnorderedListOutlined />,
        },
        {
          label: <Link to="/admin/list-book">List Book</Link>,
          key: "/list-book",
          icon: <PlusCircleOutlined />,
        },
       
      ],
    },
   
  ];

  return (
    <Menu
      mode="inline"
      items={items}
      //Khi bạn vào trang /admin/books, thì mục “Danh sách sách” sẽ được làm nổi bật để người dùng biết đang ở trang nào.highlight
      defaultSelectedKeys={["/admin/books"]}
      defaultOpenKeys={["book-management"]}//Mở sẵn menu con (submenu) với key = "book-management" khi giao diện sidebar được render.
    />
  );
}

export default MenuSider;
