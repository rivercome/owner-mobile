import React from "react";
import { Button } from "antd-mobile";
import styles from "./index.less";

const Header = props => (
  <div className={styles.header}>
    <ul className={styles.nav}>
      <li>
        <div style={{ marginLeft: "-20px" }}>
          <Button inline size="small">
            返回
          </Button>
        </div>
      </li>
      <li>
        <span style={{ fontSize: "18px" }}>秦皇岛物业管理平台</span>
      </li>
      <li>
        <Button inline size="small">
          首页
        </Button>
      </li>
    </ul>
    <div className={styles.AppContent}>{props.children}</div>
  </div>
);
export default Header;
