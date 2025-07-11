import { Card, Input, Button, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { forgotPasswordApi } from '../../../../services/auth';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 👈 Thêm dòng này

  const handleSend = async () => {
    if (!email.trim()) return toast.error("Vui lòng nhập email");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Email không hợp lệ!");

    try {
      setLoading(true);
      await forgotPasswordApi(email);
      toast.success("Chúng tôi đã gửi mật khẩu mới đến email của bạn!");
      
      // ✅ Chuyển về trang login sau 1.5 giây (đợi toast hiện xong)
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const msg = err.response?.data?.mess || "Lỗi gửi email";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', justifyContent: 'center',
      alignItems: 'center', background: '#f0f2f5'
    }}>
      <Card
        style={{
          width: 420, padding: 24,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          borderRadius: 12
        }}
      >
        <Title level={3} style={{ textAlign: 'center' }}>Quên mật khẩu</Title>
        <Text>Nhập email để nhận mật khẩu mới:</Text>
        <Input
          placeholder="example@gmail.com"
          size="large"
          prefix={<MailOutlined />}
          style={{ margin: '14px 0' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="primary"
          block
          size="large"
          onClick={handleSend}
          loading={loading}
        >
          Gửi mật khẩu mới
        </Button>
      </Card>
    </div>
  );
};

export default ForgotPassword;
