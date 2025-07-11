import { Button } from "antd";

/**
 * @param {string} text - Nội dung hiển thị trên nút
 * @param {function} onClick - Sự kiện click
 * @param {string} type - Loại nút (primary, default, dashed, text, link)
 * @param {string} size - Kích thước (small, middle, large)
 * @param {ReactNode} icon - Icon nếu có
 * @param {boolean} loading - Trạng thái loading
 * @param {object} styleButton - Style cho button
 * @param {string} textButton - Text hiển thị
 * @param {object} styleTextButton - Style cho text
 */

const CustomButton = ({
  text = "Gửi",
  onClick,
  type = "primary",
  size = "middle",
  icon,
  loading = false,
  styleButton = {},
  styleTextButton = {},
  disabled = false, // THÊM DÒNG NÀY
  ...rest
}) => {
  return (
    <Button
      type={type}
      size={size}
      icon={icon}
      onClick={onClick}
      loading={loading}
      disabled={disabled} // TRUYỀN disabled VÀO
      style={{
        ...styleButton,
        background: disabled ? '#ccc' : styleButton.background, // NỀN MÀU #ccc KHI DISABLED
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      {...rest}
    >
      <span style={styleTextButton}>{text}</span>
    </Button>
  );
};


export default CustomButton;
