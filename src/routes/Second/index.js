import React, { Component } from "react";
import { Button, List } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.css";
import { connect } from "dva";

const Item = List.Item;
const Brief = Item.Brief;

class Second extends Component {
  state = {
    disabled: false,
    mytext: "",
    a: ""
  };
  // getData() {
  //  this.props.dispatch({
  //   type:'login/getBuilding',
  //   payload:""
  //  })
  // }

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    const abv = this.props.login;
    console.log(abv);
    let tmp = abv.response === undefined ? {} : abv.response;
    console.log(tmp);
    let abc = tmp.data === undefined ? {} : tmp.data;
    let value =
      abc.userInfo === undefined
        ? [
            {
              xmid: "",
              sd: "",
              sdy: "",
              sh: ""
            }
          ]
        : abc.userInfo;
    console.log(value);
    return (
      <div>
        <List renderHeader={() => "  "} className="my-list">
          {value.map((item, index) => {
            return (
              <Item>
                {` ${item.xmid}小区 `}
                <Brief>{`${item.sd}栋${item.sdy}单元${item.sh}号`}</Brief>
              </Item>
            );
          })}
        </List>
      </div>
    );
  }
}

const Seconda = createForm()(Second);
export default connect(({ login }) => ({ login }))(Seconda);
