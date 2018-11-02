import React, { Component } from "react";
import { List, WhiteSpace } from "antd-mobile";
import { createForm } from "rc-form";
import styles from "./list.less";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
const Item = List.Item;
// const Brief = Item.Brief;
if (isIPhone) {
  let moneyKeyboardWrapProps;
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
  console.log("?", moneyKeyboardWrapProps.onTouchStart);
}
// @createForm()
class ListInformFun extends Component {
  // componentDidMount() {
  //   this.autoFocusInst.focus();
  // }
  handleClick = () => {
    console.log("22", this.inputRef.focus());
    console.log("this", this.props.form.getFieldsValue());
    this.inputRef.focus();
  };
  state = {
    disabled: false
  };
  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <div>
        <div style={{ fontSize: "14px" }}>
          <List renderHeader={() => "小区信息"}>
            <div className={styles.box}>
              <Item extra={"秦皇岛市碧海云天小区"}>
                <span className={styles.content}>小区名称：</span>
              </Item>
              <Item extra={"秦皇岛市海港区人民广场西侧"}>
                <span className={styles.content}>坐落地点：</span>
              </Item>
              <Item extra={"商品住宅"}>
                <span className={styles.content}>小区类型：</span>
              </Item>
              <Item extra={"秦皇岛市安岳房地产开发有限公司"}>
                <span className={styles.content}>开发建设单位：</span>
              </Item>
              <Item extra={"27.0000"}>
                <span className={styles.content}>建筑面积（万平方米）：</span>
              </Item>
              <Item extra={"5082.00"}>
                <span className={styles.content}>绿化面积（平方米）：</span>
              </Item>
              <Item extra={"2135"}>
                <span className={styles.content}>房屋总套数：</span>
              </Item>
              <Item extra={"7栋-3-负一层"}>
                <span className={styles.content}>物业管理用房位置：</span>
              </Item>
              <div>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
              </div>
            </div>
          </List>
        </div>
      </div>
    );
  }
}

const ListInform = createForm()(ListInformFun);
export default ListInform;
