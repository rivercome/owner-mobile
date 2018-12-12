import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class Repairfarecontent extends React.Component {
  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          <p>维修基金使用情况公示</p>
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>公示日期: </li>
            <li>计划维修日期(起): </li>
            <li>计划维修日期(止))</li>
            <li>维修项目: </li>
            <li>维修项目简述: </li>
            <li>预算金额: </li>
            <li>总业主数: </li>
            <li>同意总业主数: </li>
            <li>总业主房屋面积: </li>
            <li>同意业主房屋面积: </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default Repairfarecontent;
