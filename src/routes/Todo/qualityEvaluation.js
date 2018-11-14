import React, { Component } from "react";
import { List, TextareaItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import { Divider, Radio } from "antd";
import styles from "./Vote.less";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
class evaluation extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles.box}>
        <span>关于2018的评价</span>
        <Divider />
        <div className={styles.main}>
          <span>发布时期：</span> <br />
          <span>截止时期：</span> <br />
          <span>发布单位：</span> <br />
          <span>内容概述：</span> <br />
          <List>
            <TextareaItem
              {...getFieldProps("note1")}
              rows={3}
              placeholder="fixed number of lines"
            />
          </List>
        </div>
        <div>
          <span>综合服务:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">满意</RadioButton>
              <RadioButton value="a">基本满意</RadioButton>
              <RadioButton value="b">不满意</RadioButton>
              <RadioButton value="c">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note3")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span>秩序管理:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">满意</RadioButton>
              <RadioButton value="a">基本满意</RadioButton>
              <RadioButton value="b">不满意</RadioButton>
              <RadioButton value="c">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note3")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span>卫生保洁:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">满意</RadioButton>
              <RadioButton value="a">基本满意</RadioButton>
              <RadioButton value="b">不满意</RadioButton>
              <RadioButton value="c">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note3")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span>绿化养护:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">满意</RadioButton>
              <RadioButton value="a">基本满意</RadioButton>
              <RadioButton value="b">不满意</RadioButton>
              <RadioButton value="c">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note3")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span className={styles.attribute}>物业维护:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={onChange} defaultValue="a">
              <RadioButton value="a">满意</RadioButton>
              <RadioButton value="a">基本满意</RadioButton>
              <RadioButton value="b">不满意</RadioButton>
              <RadioButton value="c">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note3")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
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
const qualityEvaluation = createForm()(evaluation);
export default qualityEvaluation;
