import React, { Component } from "react";
import { List, InputItem, WhiteSpace } from "antd-mobile";
import { createForm } from "rc-form";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);

if (isIPhone) {
  let moneyKeyboardWrapProps;
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
  console.log("?", moneyKeyboardWrapProps.onTouchStart);
}
// @createForm()
class BasicInputExample extends Component {
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  handleClick = () => {
    console.log("22", this.inputRef.focus());
    console.log("this", this.props.form.getFieldsValue());
    this.inputRef.focus();
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => "帐号登录"}>
          <InputItem
            {...getFieldProps("autofocus")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            <div onClick={() => this.labelFocusInst.focus()}>用户名</div>
          </InputItem>
          <InputItem
            placeholder="帐号"
            type="password"
            ref={el => (this.labelFocusInst = el)}
          >
            <div onClick={() => this.labelFocusInst.focus()}>密码</div>
          </InputItem>
          <List.Item>
            <div
              style={{ width: "100%", color: "#108ee9", textAlign: "center" }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <WhiteSpace />

        <List renderHeader={() => "Number of words for title"}>
          <InputItem
            {...getFieldProps("label8")}
            placeholder="limited title length"
            labelNumber={5}
          >
            标题过长超过默认的5个字
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => "Custom title（text / image / empty)"}>
          <InputItem {...getFieldProps("input3")} placeholder="no label" />
          <InputItem
            {...getFieldProps("inputtitle2")}
            placeholder="title can be icon，image or text"
          >
            <div
              style={{
                backgroundImage:
                  "url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)",
                backgroundSize: "cover",
                height: "22px",
                width: "22px"
              }}
            />
          </InputItem>
        </List>

        <WhiteSpace />

        <WhiteSpace />
        <List renderHeader={() => "Format"}>
          <InputItem
            {...getFieldProps("phone")}
            type="phone"
            placeholder="186 1234 1234"
          >
            手机号码
          </InputItem>
          <InputItem
            {...getFieldProps("password")}
            type="password"
            placeholder="****"
          >
            密码
          </InputItem>
          <InputItem
            {...getFieldProps("number")}
            type="number"
            placeholder="click to show number keyboard"
          >
            数字键盘
          </InputItem>
          <InputItem
            {...getFieldProps("digit")}
            type="digit"
            placeholder="click to show native number keyboard"
          >
            数字键盘
          </InputItem>
        </List>
        <WhiteSpace />
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default BasicInputExampleWrapper;
