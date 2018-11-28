import React, { Component } from "react";
import { List, InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import styles from "./index.css";
import { Link } from "dva/router";
import { Toast } from "antd-mobile";
import { connect } from "dva";
import axios from "axios";

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
    //  console.log(values)
    // this.props.form.validateFields( (values) => {

    // const body = {a,b}
    // axios({
    //   method: 'post',
    //   url: 'http://154.8.214.49:8080/yzzh/login',
    //   data: {
    //     login_name: a,
    //     password: b,
    //     login_type: "yzzh"
    //   } }).then( (res) =>{
    //     console.log(res)
    //     localStorage.setItem("token",res.data.data.token)
    //     console.log(body)
    //     if (res.data.code ===1000 ){
    //       // successToast();
    //       console.log('props',this.props)
    //       // localStorage.setItem("token",res.data.data.token)
    //       this.props.history.push('/second')
    //     }
    //     else
    //     { failToast();}
    //   }).catch((e) =>{
    //     console.log(e.message)
    //   })
    // }).then(res => {
    //   alert("succ");
    //   console.log(res);
    //   // localStorage.setItem("token",res.data.data.token)
    // });
    // fetch('http://154.8.214.49:8080/user/login',
    //   {
    //      method: 'POST',
    //      headers: {
    //       'Content-Type': 'application/json'
    //     },
    //      body: JSON.stringify(body)

    // }).then( (res) =>{
    //   console.log(res)
    //   console.log(body)
    //   if (res.status ===200 ){
    //     successToast();
    //   }
    //   else
    //   { failToast();}
    // }).catch((e) =>{
    //   console.log(e.message)
    // })

    // }
    // )
  }

  handleClick = () => {
    // console.log("22", this.inputRef.focus());
    console.log("this", this.props.form.getFieldsValue());
    // this.inputRef.focus();
  };
  render() {
    const { getFieldProps } = this.props.form;
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
