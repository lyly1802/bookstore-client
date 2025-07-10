import { createBrowserRouter } from "react-router-dom";
// import HomeUser from "./pages/User/HomeUser/HomeUser";
// import Product from "./pages/User/Product/Product";
// import P404 from "./pages/P404/P404";
// import About from "./pages/User/About/About";
// import UserLayout from "./layouts/UserLayout";
// import TypeProduct from "./pages/User/TypeProduct/TypeProduct";
// import Login from "./pages/User/Login/Login";
// import Registered from "./pages/User/Registered/Registered";
// import ProductDetail from "./pages/User/ProductDetail/ProductDetail";
import AddBook from "../components/pages/admin/ListBook/AddBook";
import AdminLayout from "../components/layouts/AdminDefault/AdminLayout";
import ListBook from "../components/pages/admin/ListBook/ListBook";
//import ProtectedRouteAdmin from "../router/ProtectedRouteAdmin"; 
//import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserLayout />,
//     nạp giao diện chung của userlayout vào trước ,những thành phần thay đổi sẽ nằm trong Outlet như:HomeUser sẽ thay thế cho Outlet
    
//     children: [
//       {
//         path: "",
//         element: <HomeUser/>,
//       },
//       {
//         path: "about",
//         element: <About/>,
//       },
//       {
//         path: "product",
//         element: <Product/>,
//       },
//        {
//         path: "login",
//         element: <Login/>,
//       },
//        {
//         path: "registered",
//         element: <Registered/>,
//       },
//        {
//         path: "product-detail",
//         element: <ProductDetail/>,
//       },
//        {
//         path: "type",
//         element: <TypeProduct/>,
//       },
       
//       {
//         path:"*",
//         element: <P404/>,
//       },
//       // {
//       //   path: "books",
//       //   element: <AdminBookPage/>,
//       // },

//       {
//         path:"forgotpassword",
//         element:<ForgotPassword/>
//       }
      
//     ],
//   },
  //route dành cho admin
  {
  path: "/admin",
  //element: <ProtectedRouteAdmin />, // Route bảo vệ
  children: [
    {
      path: "",
      element: <AdminLayout />, // Nếu qua được kiểm tra thì mới render layout admin
      children: [
        { path: "books", element: <AddBook /> },
        { path: "list-book", element: <ListBook /> },
        //{ path: "*", element: <P404 /> },
      ],
    },
  ],
}

]);




export default router;
