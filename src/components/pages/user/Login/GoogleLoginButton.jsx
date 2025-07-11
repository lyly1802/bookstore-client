import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { loginWithGoogle } from "../../../../services/auth";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../../../utils/localStorage";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    try {
      const res = await loginWithGoogle(response.credential);
      const { token, user } = res.data;

      saveUser({
        token,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      toast.success("Đăng nhập Google thành công!");
      navigate("/");
    } catch (error) {
      toast.error("Đăng nhập Google thất bại");
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 12 }}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => toast.error("Đăng nhập Google thất bại")}
      />
    </div>
  );
};

export default GoogleLoginButton;
