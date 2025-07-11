import InputForm from "../../../InputForm/InputForm";
import CustomButton from "../../../CustomButton/CustomButton";
import login from "../../../../assets/login.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../services/auth";
import { toast } from "react-toastify";
import GoogleLoginButton from "./GoogleLoginButton";
import { saveUser } from "../../../../utils/localStorage";

import "./Login.css"; // ✅ Thêm CSS thường

function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      return toast.error("Vui lòng nhập đầy đủ email và mật khẩu!");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("Email không hợp lệ!");
    }

    if (password.length < 6) {
      return toast.error("Mật khẩu phải có ít nhất 6 ký tự!");
    }

    try {
      const res = await loginUser({ email, password });
      const { token, user } = res.data;

      saveUser({
        token,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      toast.success("Đăng nhập thành công!");

      if (user.role === "ADMIN") {
        navigate("/admin/books");
      } else {
        navigate("/");
      }
    } catch (err) {
      const msg = err.response?.data?.mess || "Đăng nhập thất bại!";
      toast.error(msg);
    }
  };

  const handleNavigateRegistered = () => {
    navigate("/registered");
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tài khoản</p>

          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={(val) => setEmail(val)}
          />

          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>

            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={(val) => setPassWord(val)}
            />
          </div>

          <CustomButton
            disabled={!email.length || !password.length}
            onClick={handleLogin}
            size="40"
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            text="Đăng nhập"
            styleTextButton={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "700",
            }}
          />

          <GoogleLoginButton />

          <p>
            <span
              className="login-text-light"
              onClick={handleForgotPassword}
              style={{ marginTop: "12px", display: "inline-block" }}
            >
              Quên mật khẩu
            </span>
          </p>
          <p style={{ marginTop: "-4px" }}>
            Chưa có tài khoản?
            <span className="login-text-light" onClick={handleNavigateRegistered}>
              {" "}Tạo tài khoản
            </span>
          </p>

        </div>

        <div className="login-right">
          <Image
            src={login}
            preview={false}
            alt="login"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Tiki</h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
