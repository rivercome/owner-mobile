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
  handleClick = () => {
    // this.props.form.getFieldsValue((...value)=>{
    //   console.log(...value)
    // })
    const a = this.props.form.getFieldsValue().message;
    const b = this.props.form.getFieldsValue().phone;
    const c = this.props.form.getFieldsValue().count;
    const value = { a, b, c };
    console.log(value);
    console.log(this.props.handleSubmit);
    this.props.handleSubmit(value);
    this.props.handleSubmit(value => {
      console.log(value);
    });
  };

  render() {
    // const abc=this.props
    // console.log(abc)
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
