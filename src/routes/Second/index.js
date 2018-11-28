import React, { Component } from "react";
import { Button, List } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.css";
import { connect } from "dva";
// import { Link } from 'dva/router';
import axios from "axios";

// @connect (({ ccon }) => ({
//   ccon,
// }))

var a, b, c, str;
// axios({
//     method: 'get',
//     url: 'http://154.8.214.49:8080/yzzh/login',
//     data: {
//       syzxm: str,
//       sd: a,
//       sdy: b,
//       sh:c
//     }
//   });

const Item = List.Item;
const Brief = Item.Brief;

class Second extends Component {
  state = {
    disabled: false,
    mytext: "",
    a: ""
  };
  getData() {
    //请求数据函数
    fetch("http://154.8.214.49:8080/wyyz/xxwh/search", {
      method: "GET",
      headers: {
        token: localStorage.token,
        token_type: "yz"
      }
    }).then(res =>
      res.json().then(data => {
        console.log(data);
      })
    );
  }

  //     data => {
  //       console.log(data)
  //       // this.setState({
  //       //   //  mytext: data
  //       //    a:data.sd,
  //       //    b:data.sdy,
  //       //    c:data.sh
  //       //   })

  //     }
  //   )
  // }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <List renderHeader={() => "  "} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            {` ${str}小区 `}
            <Brief>{`${a}栋${b}单元${c}号`}</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

const Seconda = createForm()(Second);
export default Seconda;
