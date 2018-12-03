import React, { Component } from "react";
import { connect } from "dva";
import { Button, List } from "antd-mobile";
import { Link } from "dva/router";
import styles from "../../components/submission/index.less";
import SubmitContent from "../../components/submission";

class Submission extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getData() {
    this.props.dispatch({
      type: "tousu/getTsList",
      payload: ""
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const value = this.props.tousu.list;
    console.log(value);
    let content = value === undefined ? [] : value.data;
    console.log(content);
    const abc = (
      <List renderHeader={() => "  "} className="my-list">
        {content.map((item, index) => {
          return (
            <div className={styles.content}>
              <div className={styles.message}>
                <span>投诉事项:</span>
                <span>{item.stssx}</span>
                <br />
                <span>投诉时间:</span>
                <span>{item.dtsrq}</span>
                <br />
                <span>处理状态：</span>
                <span>{item.sslzt}</span>
                <br />
                <span>数据状态</span>
                <span>{item.sstatus}</span>
              </div>
              <div className={styles.button}>
                <Button inline size="small" style={{ marginRight: "4px" }}>
                  <Link to={`/tsDetail/${item.id}`}> 详情</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </List>
    );
    return (
      <div>
        <div>
          <span>业主投诉信息</span>

          <Button>
            <Link to="/addTs">新增</Link>
          </Button>
        </div>
        <SubmitContent content={content} value={abc} />
      </div>
    );
  }
}
export default connect(({ tousu }) => ({ tousu }))(Submission);
