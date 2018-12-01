import React, { Component } from "react";
import { connect } from "dva";
import {
  Button,
  List,
  TextareaItem,
  Modal,
  WhiteSpace,
  WingBlank
} from "antd-mobile";
import { Radio, message } from "antd";
import { createForm } from "rc-form";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const alert = Modal.alert;

let values = "满意";

class Detail extends Component {
  constructor() {
    super();
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
  onChange = e => {
    console.log(e.target.value);
    values = e.target.value;
  };
  handleSubmit = value => {
    let a = this.props.form.getFieldsValue().bmy;
    const time = this.getNowFormatDate();
    const e = this.props.match.params.id;
    const content = {
      body: {
        syzpj: values,
        sbmynr: a,
        dpjrq: time
      },
      id: e
    };
    console.log(value);
    console.log(content);
    if (values.length === 3) {
      if (a.length === 0) {
        message.error("请输入不满意内容");
      } else {
        this.props.dispatch({
          type: "submission/submitThing",
          payload: content
        });
      }
    } else {
      this.props.dispatch({
        type: "submission/submitThing",
        payload: content
      });
    }
  };
  handleCx = () => {
    console.log();
    const e = this.props.match.params.id;
    this.props.dispatch({
      type: "submission/handleCx",
      payload: e
    });
  };
  componentDidMount() {
    const e = this.props.match.params.id;
    this.props.dispatch({
      type: "submission/getDetail",
      payload: e
    });
  }
  render() {
    const a = this.props.submission.detail;
    const e = this.props.match.params.id;
    console.log(a);
    let value =
      a === undefined
        ? {
            data: {}
          }
        : a.data;
    const { getFieldProps } = this.props.form;
    return (
      <div>
        {/* <BxDetail
          handleSubmit={this.handleSubmit}
          handleCx={this.handleCx}
          value={value}
          id={e}
        /> */}
        <div>
          <span>内容</span>
          <br />
          <span>事项</span> <span>{value.sbxsx}</span>
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Button
              onClick={() =>
                alert("撤销", "你确定撤销嘛?", [
                  {
                    text: "取消",
                    onPress: () => console.log("cancel"),
                    style: "dafault"
                  },
                  { text: "确定", onPress: this.handleCx }
                ])
              }
            >
              撤销
            </Button>
          </WingBlank>
          <span>日期:</span>
          <span>{value.dbxrq}</span>
          <br />
          <span>电话:</span>
          <span>{value.slxdh}</span>
          <br />
          <span>状态:</span>
          <span>{value.sstatus}</span>
          <br />
          <span>内容:</span>
          <List>
            <TextareaItem
              {...getFieldProps("count", {
                initialValue: `${value.sbxnr}`
              })}
              rows={5}
              count={100}
              editable={false}
            />
          </List>
          <span>附件：</span>
        </div>
        <div>
          <span>办结情况</span>
          <span />
          <br />
          <span>处理状态：</span>
          <span>{value.sslzt}</span>
          <br />
          <span>受理日期：</span>
          <span>{value.dslrq}</span>
          <br />
          <span>办结情况：</span>
          <List>
            <TextareaItem
              {...getFieldProps("count", {
                initialValue: `${value.sblqk}`
              })}
              rows={5}
              count={100}
              editable={false}
            />
          </List>
          <span>办结日期：</span>
          <span>{value.dbjrq}</span>
        </div>
        <div>
          <span>业主评价</span>
          <br />
          <span>评价结果</span>
          <br />
          <div style={{ display: "inline", marginLeft: "30px" }}>
            <RadioGroup onChange={this.onChange} defaultValue="满意">
              <RadioButton value="满意">满意</RadioButton>
              <RadioButton value="基本满意">基本满意</RadioButton>
              <RadioButton value="不满意">不满意</RadioButton>
            </RadioGroup>
          </div>
          <div>
            <span>不满意内容</span>
            <List>
              <TextareaItem
                {...getFieldProps("bmy", {
                  initialValue: "计数功能,我的意见是...",
                  rules: [
                    { required: true, message: "Please select your country!" }
                  ]
                })}
                rows={5}
                count={100}
              />
            </List>
          </div>
        </div>
        <Button onClick={this.handleSubmit}>提交</Button>
      </div>
      // </div>
    );
  }
}
const Details = createForm()(Detail);
export default connect(({ submission }) => ({ submission }))(Details);
