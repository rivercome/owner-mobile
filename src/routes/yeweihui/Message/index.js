import React, { Component } from "react";
import styles from "./index.less";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        dclsj: "2014-01-20 00:00:00",
        sbgdd: "碧海云天19栋负1层",
        ncyzs: 7,
        nzfzrs: 2,
        szrxm: "胡宝华",
        szrlxdh: "138333515219"
      }
    };
  }
  render() {
    return (
      <div>
        <p className={styles.title}>业委会信息:</p>
        <div className={styles.details}>
          <p>成立日期 :{this.state.data.dclsj}</p>
          <p>办公地址 :{this.state.data.sbgdd}</p>
          <p>成员总数 :{this.state.data.ncyzs}</p>
          <p>主任副主任总人数 :{this.state.data.nzfzrs}</p>
          <p>主任姓名 :{this.state.data.szrxm}</p>
          <p>主任电话 :{this.state.data.szrlxdh}</p>
        </div>
      </div>
    );
  }
  getData() {
    fetch("http://154.8.214.49:8080/sjd/yzxgxx/ywhxx", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const data = res.data;
        this.setState({ data });
      });
  }
  componentDidMount() {
    // this.getData();
  }
}

export default Message;
