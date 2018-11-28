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
  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          <p>小区信息: </p>
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
