import React, { Component } from "react";
import { connect } from "dva";
import Add from "../../components/submissionAdd/index";

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = value => {
    console.log("lpf");
    this.props.dispatch({
      type: "submission/handleSubmit",
      payload: value
    });
  };
  render() {
    return (
      <div>
        <Add handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default connect(({ submission }) => ({ submission }))(Submission);
