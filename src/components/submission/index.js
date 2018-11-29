import React, { Component } from "react";
import { Button, List } from "antd-mobile";
import { Link } from "dva/router";
import styles from "./index.less";

const Item = List.Item;

class submission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = this.props.content;
    console.log(content);

    return (
      <div className={styles.box}>
        <List renderHeader={() => "  "} className="my-list">
          {content.map((item, index) => {
            return (
              <div className={styles.content}>
                <div className={styles.message}>
                  <span>保修事项:</span>
                  <span>{item.sbxsx}</span>
                  <br />
                  <span>保修日期:</span>
                  <span>{item.dbxrq}</span>
                  <br />
                  <span>处理状态:</span>
                  <span>{item.sslzt}</span>
                  <br />
                  <span>数据状态：</span>
                  <span>{item.sstatus}</span>
                </div>
                <div className={styles.button}>
                  <Button inline size="small" style={{ marginRight: "4px" }}>
                    <Link to={`/bxDetail/${item.id}`}> 详情</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </List>
      </div>
    );
  }
}
export default submission;
