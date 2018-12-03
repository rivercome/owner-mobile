import React, { Component } from "react";
import { Button, List } from "antd-mobile";

import styles from "./index.less";

class submission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = this.props.content;
    console.log(content);
    const value = this.props.value;
    return <div className={styles.box}>{value}</div>;
  }
}
export default submission;
