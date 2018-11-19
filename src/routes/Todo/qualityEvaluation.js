import React, { Component } from "react";
import { List, TextareaItem } from "antd-mobile";
import { createForm } from "rc-form";

class evaluation extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <span>关于2018的评价</span>
        <div>
          <span>发布时期：</span>
          <span>截止时期：</span>
          <span>发布单位：</span>
          <span>内容概述：</span>
          <List>
            <TextareaItem
              {...getFieldProps("note1")}
              rows={3}
              placeholder="fixed number of lines"
            />
          </List>
        </div>
        <div>
          <span>综合服务：</span>
          <List>
            <TextareaItem
              {...getFieldProps("note3")}
              autoHeight
              labelNumber={5}
              placeholder="dasdasdjajsdsn"
            />
          </List>
        </div>
      </div>
    );
  }
}
const qualityEvaluation = createForm()(evaluation);
export default qualityEvaluation;
