#  Bookstore Client

**Bookstore Client** là frontend giao diện người dùng của một website quản lý và bán sách, được xây dựng bằng **React + Vite**. Dự án gồm hai phần chính: giao diện quản trị (Admin) và giao diện người dùng (User).

---

## Tình trạng dự án

- ✅ **Hoàn thành giao diện CRUD cho Admin**
- ✅ **Thêm giao diện người dùng (User)**:
  - Đăng ký, đăng nhập
  - Đăng nhập bằng Google
  - Quên mật khẩu (Gửi email để đặt lại mật khẩu)
---
## Chức năng
###  Admin:
- Quản lý sách: Thêm / Sửa / Xóa sách (CRUD)
- Giao diện thân thiện và dễ sử dụng

###  Người dùng (User):
- Đăng ký, đăng nhập với email + password
- Đăng nhập bằng tài khoản Google (OAuth2)
- Quên mật khẩu: Nhập email để nhận liên kết đặt lại mật khẩu
---
##  Công nghệ sử dụng
- ⚛️ React + Vite
- 🔀 React Router DOM
- 🧩 Ant Design (UI Components)
- 🌐 Axios (API)
- 🔐 Google OAuth (`@react-oauth/google`)
- 🔔 React Toastify (Thông báo)

---

## ▶️ Cách chạy dự án

```bash
npm install
npm run dev
## HƯỚNG DẪN CLONE DỰ ÁN VỀ MÁY
Bước 1: Clone dự án về
git clone git@github.com:lyly1802/bookstore-client.git
Bước 2: Di chuyển vào thư mục dự án
cd bookstore-client
Bước 3: Cài đặt các thư viện cần thiết
npm install
Bước 4: Khởi động ứng dụng
npm run dev

