import React, { Component } from "react";
import { Button } from "antd-mobile";
import styles from "./index.less";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.history.go(-1);
  }
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.first}>
          <div className={styles.buttons}>
            <Button
              inline
              size="small"
              style={{ marginRight: "4px" }}
              onClick={this.handleClick}
            >
              返回
            </Button>
          </div>
        </div>
        <div className={styles.first}>
          <span className={styles.title}>
            {this.props.title ? this.props.title : "秦皇岛物业平台"}
          </span>
        </div>
        <div className={styles.first}>
          <div className={styles.button}>
            <Button
              inline
              size="small"
              style={{ marginRight: "4px" }}
              onClick={this.handleClick}
            >
              首页
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
