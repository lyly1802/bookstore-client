import { Layout } from "antd";
import "./LayoutDefaut.css";
import logo from "../../../assets/logo.jpeg";
import imgaes from "../../../assets/images.png";
import { useState } from "react";
import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
//import Notify from "../pages/Admin/Notify";
import MenuSider from "../../pages/admin/MenuSider";
import { Outlet } from "react-router-dom";
const { Content, Sider } = Layout;

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className="layout_default">
        <header className="header">
          <div
            className={`header_logo ${
              collapsed ? "header_logo_collapsed" : ""
            }`}
          >
            <img src={collapsed ? imgaes : logo} alt="logo" />
          </div>

          <div className="header_nav">
            <div className="header_nav_left">
              <div
                className="header_collapse"
                onClick={() => setCollapsed(!collapsed)}
              >
                <MenuUnfoldOutlined />
              </div>
              <div className="header_search">
                <SearchOutlined />
              </div>
            </div>
            {/* <div className="header_nav_right">
                <Notify/>
            </div> */}
          </div>
        </header>
        <Layout>
          <Sider className="sider" collapsed={collapsed} theme="light">
            <MenuSider/>
          </Sider>
          <Content className="content">
           <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default AdminLayout;
