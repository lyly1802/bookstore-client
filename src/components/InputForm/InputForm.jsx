import { Input } from "antd";
import "./InputForm.css"; // ✅ import CSS thường

const InputForm = (props) => {
  const { placeholder = "Nhập text", ...rests } = props;

  const handleOnchangeInput = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Input
      className="input-custom" // ✅ áp dụng class CSS
      placeholder={placeholder}
      value={props.value}
      {...rests}
      onChange={handleOnchangeInput}
    />
  );
};

export default InputForm;
