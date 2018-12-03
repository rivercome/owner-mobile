import React, { Fragment } from "react";
import styles from "./index.less";
const dataSource = [
  {
    name: "小区名称: ",
    content: "秦皇岛详盛物业服务有限公司"
  },
  {
    name: "坐落地点: ",
    content: "**"
  },
  {
    name: "小区类型: ",
    content: "***"
  },
  {
    name: "开发建设单位: ",
    content: "***"
  },
  {
    name: "建筑面积 (万平方米): ",
    content: "***"
  },
  {
    name: "绿化面积 (平方米): ",
    content: "***"
  },
  {
    name: "房屋总套数: ",
    content: "***"
  },
  {
    name: "物业管理用房位置: ",
    content: "***"
  }
];

export default class NeigoborInfo extends React.Component {
  state = {
    mydata: ""
  };
  getData() {
    fetch("http://154.8.214.49:8080/sjd/yzxgxx/xqxx", {
      method: "GET",
      headers: {
        token: localStorage.token,
        token_type: "yz"
      }
    }).then(res =>
      res.json().then(data => {
        // console.log(data);
        this.setState({
          mydata: data
        });
      })
    );
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    console.log(this.state.mydata.data);
    let data = this.state.mydata ? this.state.mydata.data : "";
    return (
      <Fragment>
        <div className={styles.header}>
          <p>小区信息: </p>
        </div>
        <div className={styles.content}>
          <ul>
            <li key="1">小区名称: {data ? data.szbqymc : ""}</li>
            <li key="2">坐落地点: {data ? data.szldd : ""}</li>
            <li key="3">小区类型: {data ? data.sxmlx : ""}</li>
            <li key="4">开发建设单位: {data ? data.skfjsdw : ""}</li>
            <li key="5">建筑面积 (万平方米): {data ? data.njzmj : ""}</li>
            <li key="6">绿化面积 (平方米): {data ? data.nlhmj : ""}</li>
            <li key="7">房屋总套数: {data ? data.izzts : ""}</li>
            <li key="8">物业管理用房位置: {data ? data.swyglyfwz : ""}</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
