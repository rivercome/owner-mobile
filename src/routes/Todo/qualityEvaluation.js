import React, { Component } from "react";
import { List, TextareaItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import { connect } from "dva";
import { Divider, Radio } from "antd";
import styles from "./Vote.less";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

let tag = {
  zhfw: "满意",
  zxgl: "满意",
  wsbj: "满意",
  lhyh: "满意",
  wyfw: "满意"
};
class evaluation extends Component {
  componentDidMount() {
    const e = this.props.match.params.id;
    this.props.dispatch({
      type: "dbsy/getQualityData",
      payload: e
    });
  }
  handleSubmit = () => {
    const a = this.props.form.getFieldsValue().note2;
    const b = this.props.form.getFieldsValue().note3;
    const c = this.props.form.getFieldsValue().note4;
    const d = this.props.form.getFieldsValue().note5;
    const e = this.props.form.getFieldsValue().note6;
    const f = this.props.match.params.id;
    const content = {
      value: {
        ...tag,
        zhfw_sbtyyy: a,
        zxgl_sbtyyy: b,
        wsbj_sbtyyy: c,
        lhyh_sbtyyy: d,
        wyfw_sbtyyy: e
      },
      id: f
    };
    console.log(content);
    this.props.dispatch({
      type: "dbsy/submitQuality",
      payload: content
    });
  };
  onChange(e) {
    tag.zhfw = e.target.value;
  }
  onChange1(e) {
    e.zxgl = e.target.value;
  }
  onChange2(e) {
    e.wsbj = e.target.value;
  }
  onChange3(e) {
    e.lhyh = e.target.value;
  }
  onChange4(e) {
    e.wyfw = e.target.value;
  }
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
            <RadioGroup onChange={this.onChange} defaultValue="满意">
              <RadioButton value="满意">满意</RadioButton>
              <RadioButton value="基本满意">基本满意</RadioButton>
              <RadioButton value="不满意">不满意</RadioButton>
              <RadioButton value="弃权">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note2")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span>秩序管理:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={this.onChange1} defaultValue="满意">
              <RadioButton value="满意">满意</RadioButton>
              <RadioButton value="基本满意">基本满意</RadioButton>
              <RadioButton value="不满意">不满意</RadioButton>
              <RadioButton value="弃权">弃权</RadioButton>
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
            <RadioGroup onChange={this.onChange2} defaultValue="满意">
              <RadioButton value="满意">满意</RadioButton>
              <RadioButton value="基本满意">基本满意</RadioButton>
              <RadioButton value="不满意">不满意</RadioButton>
              <RadioButton value="弃权">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note4")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span>绿化养护:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={this.onChange3} defaultValue="满意">
              <RadioButton value="满意">满意</RadioButton>
              <RadioButton value="基本满意">基本满意</RadioButton>
              <RadioButton value="不满意">不满意</RadioButton>
              <RadioButton value="弃权">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note5")}
              autoHeight
              labelNumber={5}
              placeholder="不满意原因"
            />
          </List>
          <span className={styles.attribute}>物业维护:</span>
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={this.onChange4} defaultValue="满意">
              <RadioButton value="满意">满意</RadioButton>
              <RadioButton value="基本满意">基本满意</RadioButton>
              <RadioButton value="不满意">不满意</RadioButton>
              <RadioButton value="弃权">弃权</RadioButton>
            </RadioGroup>
          </div>
          <List>
            <TextareaItem
              {...getFieldProps("note6")}
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
            onClick={this.handleSubmit}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}
const qualityEvaluation = createForm()(evaluation);
export default connect(({ dbsy }) => ({ dbsy }))(qualityEvaluation);
