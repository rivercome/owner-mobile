import React from "react";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";
import styles from "./index.less";

const Header = props => (
  <div className={styles.header}>
    <ul className={styles.nav}>
      <li>
        <div style={{ marginLeft: "-20px" }}>
          <Button
            inline
            size="small"
            style={{ marginTop: "10px" }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            返回
          </Button>
        </div>
      </li>
      <li>
        <span className={styles.title1}>秦皇岛物业管理平台</span>
      </li>
      <li className={styles.left}>
        <Button inline size="small">
          首页
        </Button>
      </li>
    </ul>
    <div className={styles.AppContent}>{props.children}</div>
  </div>
);
export default Header;
