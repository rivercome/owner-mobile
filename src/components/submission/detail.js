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

let value = "满意";
class Detail extends Component {
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
  onChange = e => {
    console.log(e.target.value);
    value = e.target.value;
  };
  handleCx = () => {
    const id = this.props.id;
    this.props.handleCx(id);
  };
  handleSubmit = () => {
    let a = this.props.form.getFieldsValue().bmy;
    const time = this.getNowFormatDate();
    const content = {
      body: {
        syzpj: value,
        sbmynr: a,
        dpjrq: time
      },
      id: this.props.id
    };
    console.log(value);
    console.log(content);
    if (value.length === 3) {
      if (a.length === 0) {
        message.error("请输入不满意内容");
      } else {
        this.props.handleSubmit(content);
      }
    } else {
      this.props.handleSubmit(content);
    }
  };

  render() {
    const { getFieldProps } = this.props.form;
    const value = this.props.value;
    console.log(value);
    const content =
      value.id === undefined
        ? {
            id: "10000000001623",
            yzid: "10000000001495",
            qyid: "90000000001204",
            dbxrq: "2018-07-08 10:19:27",
            sbxsx: "电梯故障",
            sbxnr: "B座2号电梯故障",
            slxdh: "13001231234",
            sslzt: "已办结",
            dslrq: "2018-07-09 07:23:45",
            sslr: null,
            sblqk: "办结情况良好",
            dbjrq: "2018-06-30 09:35:20",
            sbjr: null,
            dhfrq: "2018-06-30 15:35:20",
            syzpj: "非常满意",
            dpjrq: "2018-07-20 14:08:01",
            sbmynr: null,
            sstatus: "提交",
            stxr: null,
            dtxrq: null,
            ffj: null
          }
        : value;
    return (
      <div>
        <div>
          <span>内容</span>
          <br />
          <span>事项</span> <span>{content.sbxsx}</span>
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
          <span>{content.dbxrq}</span>
          <br />
          <span>电话:</span>
          <span>{content.slxdh}</span>
          <br />
          <span>状态:</span>
          <span>{content.sstatus}</span>
          <br />
          <span>内容:</span>
          <List>
            <TextareaItem
              {...getFieldProps("count", {
                initialValue: `${content.sbxnr}`
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
          <span>{content.sslzt}</span>
          <br />
          <span>受理日期：</span>
          <span>{content.dslrq}</span>
          <br />
          <span>办结情况：</span>
          <List>
            <TextareaItem
              {...getFieldProps("count", {
                initialValue: `${content.sblqk}`
              })}
              rows={5}
              count={100}
              editable={false}
            />
          </List>
          <span>办结日期：</span>
          <span>{content.dbjrq}</span>
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
    );
  }
}
const Details = createForm()(Detail);
export default connect(({ submission }) => ({ submission }))(Details);
