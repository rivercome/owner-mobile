import React, { Component } from "react";
import { List, InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import styles from "./index.css";
import { Link } from "dva/router";
import { Toast } from "antd-mobile";
import { connect } from "dva";

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

function failToast() {
  Toast.fail("Load failed !!!", 1);
}

class BasicInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const a = this.props.form.getFieldsValue().login_name;
    const b = this.props.form.getFieldsValue().password;
    const values = { a, b };
    this.props.dispatch({
      type: "login/handleLogin",
      payload: values
    });
  }

  handleClick = () => {
    // console.log("22", this.inputRef.focus());
    console.log("this", this.props.form.getFieldsValue());
    // this.inputRef.focus();
  };
  render() {
    const { getFieldProps } = this.props.form;
    console.log(this.props);
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps("login_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })}
          >
            登录账号
          </InputItem>
          <InputItem
            placeholder=" "
            type="password"
            name="password"
            {...getFieldProps("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })}
          >
            登录密码
          </InputItem>
          <p align="right">
            {/* <a>ad a </a> */}
            <Link to="/loginFirst">首次登录？</Link>
          </p>

          <List.Item>
            <Button
              type="ghost"
              size="large"
              onClick={this.handleSubmit}
              className={styles.am_button_re}
            >
              登陆
            </Button>

            <Button type="ghost" size="large" className={styles.am_button_re}>
              重置
            </Button>
          </List.Item>
        </List>
        {/* <WhiteSpace /> */}
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default connect(({ login }) => ({ login }))(BasicInputExampleWrapper);
