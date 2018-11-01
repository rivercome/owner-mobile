import React, { Component } from "react";
import { List, TextareaItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import styles from "./Vote.less";

class Vote extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    const fuJian = (
      <div>
        abc
        <Button inline size="small" style={{ marginRight: "4px" }}>
          下载
        </Button>
      </div>
    );
    return (
      <div className={styles.box}>
        <div className={styles.header}>关于2018年投票</div>
        <div className={styles.main}>
          <span>发布时期：</span> <br />
          <span>截止时期：</span> <br />
          <span>发布单位：</span> <br />
          <span>内容概述：</span>
          <List>
            <TextareaItem
              {...getFieldProps("note1")}
              rows={3}
              placeholder="fixed number of lines"
            />
          </List>
        </div>
        <span>附件：</span>
        {fuJian}
        <div className={styles.vote}>
          <span>投票</span>
          <div>
            <span>不同意原因：</span>
            <TextareaItem
              {...getFieldProps("note2")}
              rows={3}
              placeholder="fixed number of lines"
            />
          </div>
        </div>
        <Button
          inline
          type="primary"
          size="small"
          style={{ marginRight: "4px" }}
        >
          提交
        </Button>
      </div>
    );
  }
}
const TextareaItemExampleWrapper = createForm()(Vote);
export default TextareaItemExampleWrapper;
