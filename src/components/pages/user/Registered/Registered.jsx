import InputForm from "../../../InputForm/InputForm";
import CustomButton from "../../../CustomButton/CustomButton";
import login from "../../../../assets/login.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Registered.css';

import { registerUser } from "../../../../services/auth";
import { toast } from "react-toastify";

function Registered() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleRegistered = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("Email không hợp lệ!");
    }
    if (name.trim().length < 2) {
      return toast.error("Vui lòng nhập họ và tên hợp lệ!");
    }
    if (address.trim().length < 5) {
      return toast.error("Vui lòng nhập địa chỉ cụ thể hơn!");
    }
    if (!/^\d{9,11}$/.test(phone)) {
      return toast.error("Số điện thoại không hợp lệ!");
    }
    if (password.length < 6) {
      return toast.error("Mật khẩu phải có ít nhất 6 ký tự!");
    }
    if (password !== confirmPassword) {
      return toast.error("Mật khẩu xác nhận không khớp!");
    }

    const data = {
      email: email.trim(),
      password: password.trim(),
      name: name.trim(),
      address: address.trim(),
      phone: phone.trim()
    };

    const registerPromise = registerUser(data).then(async (res) => {
      await delay(1500);
      return res;
    });

    toast.promise(registerPromise, {
      pending: "Đang xử lý đăng ký...",
      success: {
        render() {
          setTimeout(() => navigate("/login"), 1000);
          return "Đăng ký thành công!";
        }
      },
      error: {
        render({ data }) {
          const msg = data?.response?.data?.mess || "Đăng ký thất bại!";
          return msg;
        }
      }
    }, {
      position: "top-right",
      autoClose: 900,
      theme: "colored"
    });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="container-left">
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tài khoản</p>

          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={(val) => setEmail(val)}
          />
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Họ và tên"
            value={name}
            onChange={(val) => setName(val)}
          />
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Số điện thoại"
            value={phone}
            onChange={(val) => setPhone(val)}
          />
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Địa chỉ"
            value={address}
            onChange={(val) => setAddress(val)}
          />

          <div style={{ position: "relative", marginBottom: "10px" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
                cursor: "pointer",
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

          <div style={{ position: "relative", marginBottom: "10px" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
                cursor: "pointer",
              }}
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(val) => setConfirmpassword(val)}
            />
          </div>

          <CustomButton
            disabled={
              !email.length ||
              !password.length ||
              !confirmPassword.length ||
              !name.length ||
              !address.length ||
              !phone.length
            }
            onClick={handleRegistered}
            size="large"
            styleButton={{
              background: "rgb(255,57,69)",
              height: "64px",
              width: "100%",
              border: "none",
              borderRadius: "15px",
              margin: "10px 0 10px",
            }}
            text="Đăng ký"
            styleTextButton={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: "700",
            }}
          />

          <p>
            Bạn đã có tài khoản?
            <span className="text-link" onClick={handleNavigateLogin}>
              {" "}Đăng nhập
            </span>
          </p>
        </div>

        <div className="container-right">
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

export default Registered;
