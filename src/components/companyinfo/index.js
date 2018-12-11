import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";
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
// getdata = () =>{

// }
export default class CompanyInfo extends React.Component {
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
