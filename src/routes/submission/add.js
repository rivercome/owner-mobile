import React, { Component } from "react";
import { connect } from "dva";
import Add from "../../components/submissionAdd/index";
class Submission extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit(value) {
    this.props.dispatch({
      type: "submission/handleSubmit",
      payload: value
    });
  }
  render() {
    return (
      <div>
        <Add handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default connect(({ submission }) => ({ submission }))(Submission);
