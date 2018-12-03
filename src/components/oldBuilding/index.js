import React, { Component } from "react";
import { List, TextareaItem, Button, InputItem } from "antd-mobile";
import { createForm } from "rc-form";
import { Radio } from "antd";
import styles from "./index.less";
import { Divider, message } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
let moneyKeyboardWrapProps;

let tp = "同意";
class example extends Component {
  constructor() {
    super();
    this.state = {
      a: ""
    };
  }
  onChange(e) {
    tp = e.target.value;
  }
  getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var second = date.getSeconds();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (second >= 0 && second <= 9) {
      second = "0" + second;
    }
    var day = date.getMinutes();
    if (day >= 0 && day <= 9) {
      day = "0" + day;
    }
    var currentdate =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      " " +
      date.getHours() +
      seperator2 +
      day +
      seperator2 +
      second;
    return currentdate;
  }
  handleSubmit = () => {
    const time = this.getNowFormatDate();
    const df = this.props.form.getFieldsValue().money2;
    const id = this.props.id;
    const reason = this.props.form.getFieldsValue().note2;
    const c = this.props.form.getFieldsValue().note3;
    const value = {
      nxzdf: df,
      stpjg: tp,
      szgsqid: id,
      dtprq: time
    };
    const content = {
      sgzfaid: id,
      sqrjg: tp,
      ngzfadf: df,
      dqrrq: time
    };
    const value1 = {
      szxysid: id,
      sysjg: tp,
      dysrq: time
    };
    const value2 = {
      sglmsid: id,
      sqrjg: tp,
      dqrrq: time
    };
    const value3 = {
      szxpjid: id,
      npjdf: c,
      dpjrq: time
    };
    const values = {
      ...value,
      sbtyyy: reason
    };
    const contents = {
      ...content,
      sbtyyy: reason
    };
    const value1s = {
      ...value1,
      sbtyyy: reason
    };
    const value2s = {
      ...value2,
      sbtyyy: reason
    };
    const value3s = {
      ...value3,
      sbtyyy: reason
    };
    if (tp.length === 3) {
      if (reason.length === 0) {
        message.error("请输入原因");
      } else {
        if (this.props.tag === 1) {
          this.props.handleSubmit(values);
        } else if (this.props.tag === 2) {
          this.props.handleSubmit(contents);
        } else if (this.props.tag === 3) {
          this.props.handleSubmit(value1s);
        } else if (this.props.tag === 4) {
          this.props.handleSubmit(value2s);
        } else if (this.props.tag === 5) {
          this.props.handleSubmit(value3s);
        }
      }
    } else {
      if (this.props.tag === 1) {
        this.props.handleSubmit(value);
      } else if (this.props.tag === 2) {
        this.props.handleSubmit(content);
      } else if (this.props.tag === 3) {
        this.props.handleSubmit(value1);
      } else if (this.props.tag === 4) {
        this.props.handleSubmit(value2);
      } else if (this.props.tag === 5) {
        this.props.handleSubmit(value3);
      }
    }
  };
  render() {
    const { message, show, dfshow } = this.props;
    console.log(this.props.show);
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
          <RadioGroup onChange={this.onChange} defaultValue="同意">
            <RadioButton value="同意">同意</RadioButton>
            <RadioButton value="不同意">不同意</RadioButton>
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
    const pjms = (
      <div>
        <span>评价描述：</span>
        <List>
          <TextareaItem
            {...getFieldProps("note3")}
            rows={3}
            placeholder="fixed number of lines"
          />
        </List>
      </div>
    );
    const df = (
      <div>
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
        <div>{show === true ? vote : pjms}</div>
        {dfshow === true ? df : null}
        <div className={styles.submit_button}>
          <List.Item>
            <Button
              inline
              type="primary"
              size="small"
              style={{ marginRight: "4px" }}
              onClick={this.handleSubmit}
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
