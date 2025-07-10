import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
