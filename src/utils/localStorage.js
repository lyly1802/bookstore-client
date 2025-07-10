const USER_KEY = "auth_user"; // Khóa dùng để lưu dữ liệu người dùng

//  Lưu người dùng vào localStorage
export const saveUser = ({ token, name, email, role }) => {
  const data = {
    token: token,
    name: name,
    email: email,
    role: role,
  };
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

// Lấy người dùng từ localStorage
export const getUser = () => {
  const data = localStorage.getItem(USER_KEY);
  if (data) {
    return JSON.parse(data);// chuyển lại thành object
  }
  return null;
};

// Lấy token
export const getToken = () => {
  const user = getUser();
  if (user && user.token) {
    return user.token;
  }
  return null;
};

// Lấy tên người dùng
export const getUserName = () => {
  const user = getUser();
  if (user && user.name) {
    return user.name;
  }
  return "";//Ngược lại trả về chuỗi rỗng "" (tránh undefined khi hiển thị giao diện)
};

// Lấy email người dùng
export const getUserEmail = () => {
  const user = getUser();
  if (user && user.email) {
    return user.email;
  }
  return "";
};

//  Lấy role của người dùng
export const getUserRole = () => {
  const user = getUser();
  if (user && user.role) {
    return user.role;
  }
  return "";
};

// Xóa người dùng khỏi localStorage
export const clearUser = () => {
  localStorage.removeItem(USER_KEY);
};

//  Kiểm tra xem đã đăng nhập chưa
export const isLoggedIn = () => {
  const token = getToken();
  if (token) {
    return true;//Trả về true nếu có token → nghĩa là đang đăng nhập.Dùng để bảo vệ route, hoặc ẩn/hiện các nút chức năng.
  }
  return false;
};
