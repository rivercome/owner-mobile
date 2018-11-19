import React, { Component } from "react";
import { List, TextareaItem, Button } from "antd-mobile";
import { Radio, Divider } from "antd";
import { createForm } from "rc-form";
import styles from "./Vote.less";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
class Vote extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    const fuJian = (
      <div>
        abc
        <div className={styles.xz}>
          <Button inline size="small" style={{ marginRight: "4px" }}>
            下载
          </Button>
        </div>
      </div>
    );
    return (
      <div className={styles.box}>
        <div className={styles.header}>关于2018年投票</div>
        <Divider />
        <div className={styles.main}>
          <span>发布时期：</span> <br />
          <span>截止时期：</span> <br />
          <span>发布单位：</span> <br />
          <span>内容概述：</span>
          <span>
            <List>
              <TextareaItem
                {...getFieldProps("note1")}
                rows={3}
                placeholder="fixed number of lines"
              />
            </List>
          </span>
        </div>
        <div className={styles.fj}>
          <span>附件：</span>
          {fuJian}
        </div>
        <Divider />
        <div className={styles.vote}>
          <span style={{ marginLeft: "30px" }}>投票</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">同意</RadioButton>
              <RadioButton value="b">不同意</RadioButton>
              <RadioButton value="c">弃权</RadioButton>
            </RadioGroup>
          </div>
          <div>
            <span>不同意原因：</span>
            <TextareaItem
              {...getFieldProps("note2")}
              rows={3}
              placeholder="请输入不同意的原因"
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button
            inline
            type="primary"
            size="small"
            style={{ marginRight: "4px" }}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}
const TextareaItemExampleWrapper = createForm()(Vote);
export default TextareaItemExampleWrapper;
