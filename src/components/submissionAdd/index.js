import React, { Component } from "react";
import { Button, List, InputItem, TextareaItem } from "antd-mobile";
import styles from "./index.less";
import { createForm } from "rc-form";
require("./photo");

class submissionAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    this.props.form.validateFields(value => {
      console.log(value);
    });
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
          {/* <div className={styles.button}>
            <Button
              inline
              size="small"
              style={{ marginRight: "4px" }}
              onClick={this.handleClick}
            >
              提交
            </Button>
          </div> */}
        </div>
        <div className={styles.message}>
          <List>
            <InputItem
              {...getFieldProps("message")}
              clear
              placeholder="有青蛙"
              ref={el => (this.autoFocusInst = el)}
            >
              报修事项
            </InputItem>
            <InputItem
              {...getFieldProps("phone")}
              clear
              placeholder="1555120"
              ref={el => (this.autoFocusInst = el)}
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
          {/* <div id="camera">
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
              <button id="btn" className="btn btn_blue">
                拍照
              </button>
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
          </div> */}
        </div>
      </div>
    );
  }
}
const BasicInputExampleWrapper = createForm()(submissionAdd);
export default BasicInputExampleWrapper;
