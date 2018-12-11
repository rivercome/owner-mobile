import React, { Component } from "react";
import styles from "./index.less";
import { connect } from "dva";
class Message extends Component {
  render() {
    let data = this.props.ywhxx.list ? this.props.ywhxx.list.data : "";
    return (
      <div>
        <p className={styles.title}>业委会信息:</p>
        <div className={styles.details}>
          <p>成立日期 : {data ? data.dclsj : ""}</p>
          <p>办公地址 : {data ? data.sbgdd : ""}</p>
          <p>成员总数 : {data ? data.ncyzs : ""}</p>
          <p>主任副主任总人数 : {data ? data.nzfzrs : ""}</p>
          <p>主任姓名 : {data ? data.szrxm : ""}</p>
          <p>主任电话 : {data ? data.szrlxdh : ""}</p>
        </div>
      </div>
    );
  }
  getData() {
    const { dispatch } = this.props;
    dispatch({
      type: "ywhxx/getYWHInfo",
      payload: ""
    });
  }
  componentDidMount() {
    this.getData();
  }
}

export default connect(ywhxx => ywhxx)(Message);
