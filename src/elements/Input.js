import React from "react";
import theme from "../Styles/theme";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    labelText,
    labelBold,
    labelColor,
    placeholder,
    _onChange,
    type,
    islabel,
    is_float,
    _type,
    _accept,
  } = props;

  if (is_float) {
    return (
      <FloatInput>
        <FileInput
          type={_type}
          accept={_accept}
          onChange={_onChange}
          placeholder={placeholder}
          multiple
        ></FileInput>
      </FloatInput>
    );
  }
  if (islabel) {
    return (
      <Grid>
        <Text
          bold={labelBold}
          color={labelColor}
          margin="0px"
          lineheight="20px"
        ></Text>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  islabel: false,
  labelText: "텍스트",
  labelBold: false,
  labelColor: "#000",
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  is_float: false,
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: 1px solid #c4c4c4;
  width: 100%;
  padding: 12px 12px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffff;
`;
const FloatInput = styled.div`
  width: 54px;
  height: 54px;
  background-color: ${theme.color.orange};
  color: #ffffff;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 800;
  position: absolute;
  bottom: 10%;
  right: 10%;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;
const FileInput = styled.input`
  width: 54px;
  height: 54px;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  font-size: 45px;
  position: absolute;
  right: 0px;
  top: 0px;
  opacity: 0;

  filter: alpha(opacity=0);
  -ms-filter: "alpha(opacity=0)";
  -khtml-opacity: 0;
  -moz-opacity: 0;
`;

export default Input;
