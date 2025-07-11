import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function P404() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Result
        status="404"
        title="404"
        subTitle="Rất tiếc, trang bạn truy cập không tồn tại hoặc đã bị xóa."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Quay về trang chủ
          </Button>
        }
      />
    </div>
  );
}

export default P404;
