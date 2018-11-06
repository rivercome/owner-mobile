import React, { Component } from "react";
import { List, TextareaItem, Button, InputItem } from "antd-mobile";
import { createForm } from "rc-form";
import { Radio } from "antd";
import styles from "./index.less";
import { Divider } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
let moneyKeyboardWrapProps;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

class example extends Component {
  constructor() {
    super();
    this.state = {
      a: ""
    };
  }
  render() {
    const fuJian = (
      <div>
        附件下载：
        <span className={styles.download_fujian}>abc</span>
        <div className={styles.download_button}>
          <Button inline size="small" style={{ marginRight: "4px" }}>
            下载
          </Button>
        </div>
      </div>
    );
    const { getFieldProps } = this.props.form;
    const { type } = this.state;
    const vote = (
      <div className={styles.vote}>
        <span className={styles.vote_title}>投票：</span>
        <div
          className={styles.vote_message}
          style={{ display: "inline", marginLeft: "30px" }}
        >
          <RadioGroup onChange={onChange} defaultValue="a">
            <RadioButton value="a">同意</RadioButton>
            <RadioButton value="b">不同意</RadioButton>
          </RadioGroup>
        </div>
        <br /> <span>不同意的原因：</span>
        <List>
          <TextareaItem
            {...getFieldProps("note2")}
            rows={3}
            placeholder="fixed number of lines"
          />
        </List>
      </div>
    );
    return (
      <div className={styles.box}>
        <div className={styles.first}>
          <span className={styles.title}>某某小区改造</span>
          <Divider />
          <div>
            <span>发布日期：</span> <br />
            <span>截止日期：</span> <br />
            <span>发布单位：</span> <br />
            <span>内容概述：</span>
            <List>
              <TextareaItem
                {...getFieldProps("note1")}
                rows={3}
                placeholder="fixed number of lines"
              />
            </List>
            <div className={styles.download}>{fuJian}</div>
          </div>
        </div>
        <div>{this.props ? vote : ""}</div>
        <span>小区现状打分：</span>
        <span>
          <List>
            <InputItem
              {...getFieldProps("money2", {
                normalize: (v, prev) => {
                  if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                    if (v === ".") {
                      return "0.";
                    }
                    return prev;
                  }
                  return v;
                }
              })}
              type={type}
              placeholder="请输入数字"
              // ref={el => this.inputRef = el}
              onVirtualKeyboardConfirm={v =>
                console.log("onVirtualKeyboardConfirm:", v)
              }
              clear
              moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            />
          </List>
        </span>
        <div className={styles.submit_button}>
          <List.Item>
            <Button
              inline
              type="primary"
              size="small"
              style={{ marginRight: "4px" }}
            >
              提交
            </Button>
          </List.Item>
        </div>
      </div>
    );
  }
}
const qualificationApplication = createForm()(example);
export default qualificationApplication;
