import React, { Component } from "react";
import { Button, List, InputItem, TextareaItem } from "antd-mobile";
import styles from "./index.less";
import { connect } from "dva";
import { createForm } from "rc-form";
import "./photo";

class submissionAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  handleClick = () => {
    const a = this.props.form.getFieldsValue().message;
    const b = this.props.form.getFieldsValue().phone;
    const c = this.props.form.getFieldsValue().count;
    const time = this.getNowFormatDate();
    const value = {
      slxdh: b,
      sbxsx: a,
      sbxnr: c,
      dbxrq: time
    };
    const content = {
      dTsrq: time,
      sTssx: a,
      sTsnr: c,
      slxdh: b
    };
    const values = {
      djyrq: time,
      sjysx: a,
      sjynr: c,
      slxdh: b
    };
    const tag = this.props.tag;
    if (tag === 1) {
      this.props.handleSubmit(value);
    } else if (tag === 2) {
      this.props.handleSubmit(content);
    } else {
      this.props.handleSubmit(values);
    }
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles.box}>
        <div className={styles.head}>
          <div className={styles.header}>
            <span className={styles.title}>报修内容</span>

            <div className={styles.button}>
              <Button
                inline
                size="small"
                style={{ marginRight: "4px" }}
                onClick={this.handleClick}
              >
                提交
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <List>
            <InputItem
              {...getFieldProps("message")}
              clear
              placeholder="有青蛙"
              // ref={el => (this.autoFocusInst = el)}
            >
              报修事项
            </InputItem>
            <InputItem
              {...getFieldProps("phone")}
              clear
              placeholder="1555120"
              // ref={el => (this.autoFocusInst = el)}
            >
              联系电话
            </InputItem>
            <TextareaItem
              {...getFieldProps("count", {
                //
              })}
              placeholder="马路上有青蛙"
              rows={5}
              count={100}
              title="报修内容"
            />
          </List>
          <div id="camera">
            <div id="contentHolder">
              <video
                id="video"
                style={{ width: "200px", height: "200px" }}
                autoPlay
              />
              <canvas
                style={{ display: "none", width: "200px", height: "200px" }}
                id="canvas"
                width="200"
                height="200"
              />
            </div>
            <div id="buttons">
              <Button id="btn" className="btn btn_blue">
                拍照
              </Button>
              <button
                id="btn_cancel"
                className="btn btn_blue"
                style={{ display: "none" }}
              >
                取消
              </button>
              <button
                id="btn_upload"
                className="btn btn_green"
                style={{ display: "none" }}
              >
                上传
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const BasicInputExampleWrapper = createForm()(submissionAdd);
export default connect(({ submission }) => ({ submission }))(
  BasicInputExampleWrapper
);
