import React, { Component } from "react";
import { List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { createForm } from "rc-form";
import styles from "./index.css";
import { Link } from "dva/router";
import { connect } from "dva";

// @connect (({ ccon}) => ({
//   ccon,
// }))

class BasicInputExample extends Component {
  // componentDidMount() {
  //   // this.autoFocusInst.focus();
  // }
  handleClick = () => {
    this.inputRef.focus();
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <WhiteSpace />
        <List renderHeader={() => "    "}>
          <InputItem
            {...getFieldProps("phone")}
            type="phone"
            placeholder="phone"
            disabled
          >
            手机号码
          </InputItem>
          <InputItem
            {...getFieldProps("password")}
            type="password"
            placeholder="******"
            disabled
            maxLength="6"
            labelNumber="12"
          >
            身份证后六位
          </InputItem>
          \
          <InputItem {...getFieldProps("name")} labelNumber="12">
            请输入您的姓名
          </InputItem>
        </List>

        <WhiteSpace />
        <Link to="/Second">
          <Button type="ghost" size="large" className={styles.am_button_re}>
            确认
          </Button>
        </Link>
        <Link to="/login">
          <Button type="ghost" size="large" className={styles.am_button_re}>
            返回
          </Button>
        </Link>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default BasicInputExampleWrapper;
// ReactDOM.render(<BasicInputExampleWrapper />, mountNode);
