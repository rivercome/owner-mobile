import React, { Fragment } from "react";
import styles from "./index.less";

export default class Commonfare extends React.Component {
  render() {
    return (
      <Fragment>
        <p className={styles.header}>公共水电费用均摊情况</p>
        <div className={styles.content}>
          <ul>
            <li>公示标题: </li>
            <li>公示日期: </li>
            <li>周期(起): </li>
            <li>周期(止): </li>
            <li>备注: </li>
          </ul>
          <p className={styles.contentheader}>公示内容: </p>
          <div className={styles.content1} />
        </div>
        <div className={styles.footer}>
          <ul>
            <li>附件一</li>
            <li>附件二</li>
            <li>附件三</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
