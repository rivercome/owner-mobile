import React, { Fragment } from "react";
import styles from "./index.less";

export default class Anoucecontent extends React.Component {
  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          <p className={styles.title}>关于********的通知</p>
          <p className={styles.date}>2018年10月1日</p>
        </div>
        <div className={styles.content}>
          <p>****</p>
        </div>

        <div className={styles.footer}>
          <p>附件:</p>
          <ul>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
