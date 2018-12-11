import React, { Component } from "react";
import { connect } from "dva";
import { Button, List } from "antd-mobile";
import styles from "../../components/submission/index.less";
import { routerRedux, Link } from "dva/router";
import SubmitContent from "../../components/submission";

class Submission extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getData() {
    this.props.dispatch({
      type: "submission/getSubmissionList",
      payload: ""
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.props.submission);
    const value = this.props.submission.list;
    console.log(value);
    let content = value === undefined ? [] : value.data;
    console.log(content);
    const abc = (
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
    );
    return (
      <div>
        <div>
          <span>业主保修信息</span>
          {/* <Button >新增</Button> */}

          <Button>
            <Link to="/addSubmission">新增</Link>
          </Button>
        </div>
        <SubmitContent content={content} value={abc} />
      </div>
    );
  }
}
export default connect(({ submission }) => ({ submission }))(Submission);
