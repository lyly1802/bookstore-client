import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/localStorage";

const ProtectedRouteAdmin = () => {
  const user = getUser();

  if (!user || user.role !== "ADMIN") {
    // Nếu chưa đăng nhập hoặc không phải admin → chuyển về /login
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;//Nó dùng để hiển thị các route con bên trong route hiện tại.
};

export default ProtectedRouteAdmin;
