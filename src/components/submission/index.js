import React, { Component } from "react";
import { Button } from "antd-mobile";
import styles from "./index.less";

class submission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.message}>
          <p>保修事项</p>
          <p>保修日期</p>
          <p>保修保修</p>
        </div>
        <div className={styles.button}>
          <Button inline size="small" style={{ marginRight: "4px" }}>
            详情
          </Button>
        </div>
      </div>
    );
  }
}
export default submission;
