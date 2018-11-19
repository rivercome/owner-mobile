import React from "react";
import { Button } from "antd-mobile";
import styles from "./index.less";

const Header = props => (
  <div className={styles.header}>
    <div className={styles.first}>
      <div className={styles.buttons}>
        <Button inline size="small" style={{ marginRight: "4px" }}>
          返回
        </Button>
      </div>
    </div>
    <div className={styles.first}>
      <div className={styles.button}>
        <Button inline size="small" style={{ marginRight: "4px" }}>
          首页
        </Button>
      </div>
    </div>
    <div className={styles.AppContent}>{props.children}</div>
  </div>
);
export default Header;
