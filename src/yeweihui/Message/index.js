import React, { Component } from "react";
import styles from "./index.less";

class Message extends Component {
  render() {
    return (
      <div>
        <p className={styles.title}>业委会信息:</p>
        <div className={styles.details}>
          <p>成立日期 :</p>
          <p>办公地址 :</p>
          <p>成员总数 :</p>
          <p>主任副主任总人数 :</p>
          <p>主任姓名 :</p>
          <p>主任电话 :</p>
        </div>
      </div>
    );
  }
  // getData(){
  //     fetch('http://localhost:3000/wyxmgl/ywhjbxx/fix',{
  //         method:'PUT'
  //     }).then(res => res.json()).then(
  //         receive => {
  //             let data =receive;
  //             console.log(data);
  //         }
  //     )
  // }
  // componentDidMount(){
  //     this.getData();
  // }
}

export default Message;
