import React, { Fragment } from "react";
import styles from "./index.less";
const dataSource = [
  {
    name: "企业名称: ",
    content: "秦皇岛详盛物业服务有限公司"
  },
  {
    name: "社会信用代码: ",
    content: "**"
  },
  {
    name: "成立日期: ",
    content: "***"
  },
  {
    name: "法定代表人: ",
    content: "***"
  },
  {
    name: "注册资金(万元): ",
    content: "***"
  },
  {
    name: "办公地址: ",
    content: "***"
  },
  {
    name: "单位联系人: ",
    content: "***"
  },
  {
    name: "单位联系人电话(固话): ",
    content: "***"
  },
  {
    name: "单位联系人电话(手机): ",
    content: "***"
  }
];

export default class CompanyInfo extends React.Component {
  getData() {
    fetch("http://154.8.214.49:8080/wyqygl/jbxxwh/qyshow/1", {
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
  componentDidMount() {
    this.getData();
  }
  state = {
    mydata: ""
  };
  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          <p>当前物业企业服务信息: </p>
        </div>
        <div className={styles.content}>
          <ul>
            {dataSource.map((item, index) => {
              return (
                <li key={index}>{`${item.name}` + "  " + `${item.content}`}</li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}
