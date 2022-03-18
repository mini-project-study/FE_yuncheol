import React from "react";
import styled from "styled-components";
import theme from "../Styles/theme";

const Button = (props) => {
  const {
    name,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    is_disabled,
    is_edit,
    _accept,
    _onChange,
    _type,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton
          type={_type}
          accept={_accept}
          disabled={is_disabled}
          onClick={_onClick}
          _onChange={_onChange}
        >
          {name ? name : children}
        </FloatButton>
      </React.Fragment>
    );
  }
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    is_edit: is_edit,
  };

  return (
    <React.Fragment>
      <ElButton disabled={is_disabled} {...styles} onClick={_onClick}>
        {name ? name : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px",
  is_disabled: false,
  is_edit: false,
};
// background-color : ${theme.color.gray3}
// props =>
//           props._disabled
//             ? `background-color:${theme.color.gray3};`
//             : `background-color:${theme.color.black};`
//       :

// background-color: ${props =>
//   props.disabled ? theme.color.gray3 : theme.color.orange};
const ElButton = styled.button`
  width: ${(props) => props.width};

  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: ${(props) => props.padding};
  ${(props) =>
    props.is_edit
      ? (props) =>
          props.disabled
            ? `background-color:${theme.color.gray5};
            color: ${theme.color.gray1};`
            : `background-color:${theme.color.white};
            color: ${theme.color.orange};
  border: 1px solid ${theme.color.orange};
            `
      : (props) =>
          props.disabled
            ? `background-color:${theme.color.orange};
            color: ${theme.color.white};`
            : `background-color:${theme.color.realblack};
            color: ${theme.color.white};`}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
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

export default Button;
