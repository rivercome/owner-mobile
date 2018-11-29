import React, { Component } from "react";
import { connect } from "dva";
import { Button } from "antd-mobile";
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
    const value = this.props.submission.list;
    console.log(value);
    let content = value === undefined ? [] : value.data;
    console.log(content);
    // const abc=[]
    return (
      <div>
        <div>
          <span>业主保修信息</span>
          {/* <Button >新增</Button> */}

          <Button>
            <Link to="/addSubmission">新增</Link>
          </Button>
        </div>
        <SubmitContent content={content} />
      </div>
    );
  }
}
export default connect(({ submission }) => ({ submission }))(Submission);
