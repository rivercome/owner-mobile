import React, { Component } from "react";
import { connect } from "dva";
import Add from "../../components/submissionAdd/index";

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = value => {
    console.log("lpf");
    // console.log(value)
    this.props.dispatch({
      type: "jianyi/handleSubmit",
      payload: value
    });
  };
  render() {
    const a = 3;
    return (
      <div>
        <Add handleSubmit={this.handleSubmit} tag={a} />
      </div>
    );
  }
}
export default connect(({ jianyi }) => ({ jianyi }))(Submission);
