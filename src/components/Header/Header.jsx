import { Badge, Col, Popover } from "antd";
import {
  UserAddOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css"; // ✅ CSS thường

import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  getUserName,
  isLoggedIn,
  clearUser,
} from "../../utils/localStorage";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      setUserName(getUserName());
    } else {
      setUserName("");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    clearUser();
    setUserName("");
    navigate("/login");
  };

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handleNavigateCart = () => {
    navigate("/cart");
  };

  const popoverContent = (
    <div className="popover-content">
      <div onClick={handleLogout}>Đăng xuất</div>
    </div>
  );

  return (
    <div className="header-container">
      <div className="header-wrapper">
        {/* Logo */}
        <Col span={5}>
          <span className="logo">LOGO</span>
        </Col>

        {/* Ô tìm kiếm */}
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            placeholder="Tìm kiếm sản phẩm, danh mục, thương hiệu..."
            textButton="Tìm kiếm"
          />
        </Col>

        {/* Tài khoản & giỏ hàng */}
        <Col span={6} className="header-actions">
          {/* Tài khoản */}
          <div className="account">
            <UserAddOutlined style={{ fontSize: "28px" }} />
            {userName ? (
              <Popover content={popoverContent} trigger="click" placement="bottomRight">
                <div>
                  <span className="text-small">Xin chào,</span>
                  <span className="text-small">
                    {userName} <CaretDownOutlined />
                  </span>
                </div>
              </Popover>
            ) : (
              <div onClick={handleNavigateLogin}>
                <span className="text-small">Đăng nhập/Đăng ký</span>
                <div>
                  <span className="text-small">Tài khoản</span>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </div>

          {/* Giỏ hàng */}
          <div onClick={handleNavigateCart} className="cart">
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            </Badge>
            <span className="text-small">Giỏ hàng</span>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Header;
