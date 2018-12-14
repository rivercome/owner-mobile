import React from "react";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";

import styles from "./index.less";
import creatHistory from "history/createBrowserHistory";

const history = creatHistory();

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
              history.goBack(-1);
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
          <Link to="/">首页</Link>
        </Button>
      </li>
    </ul>
    <div className={styles.AppContent}>{props.children}</div>
  </div>
);
export default Header;
