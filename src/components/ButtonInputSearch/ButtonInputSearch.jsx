import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const ButtonInputSearch = (props) => {
  const {
    size ,
    placeholder ,
    textButton,
    backgroundColorInput = "#fff",
    colorButton = "#fff",
    onSearch,
  } = props;

  return (
    <Search
      size={size}
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton={
        <span style={{ color: colorButton }}>
          <SearchOutlined /> {textButton}
        </span>
      }
      style={{
        backgroundColor: backgroundColorInput,
        borderRadius: "99px",
        overflow: "hidden",
      }}
    />
  );
};

export default ButtonInputSearch;
