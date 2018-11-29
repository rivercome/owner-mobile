import React, { Component } from "react";
import { connect } from "dva";
import BxDetail from "../../components/submission/detail";

class Detail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit = value => {
    this.props.dispatch({
      type: "submission/submitThing",
      payload: value
    });
  };
  handleCx = value => {
    this.props.dispatch({
      type: "submission/handleCx",
      payload: value
    });
  };
  componentDidMount() {
    const e = this.props.match.params.id;
    this.props.dispatch({
      type: "submission/getDetail",
      payload: e
    });
  }
  render() {
    const a = this.props.submission.detail;
    const e = this.props.match.params.id;
    console.log(a);
    let value =
      a === undefined
        ? {
            data: {}
          }
        : a.data;
    return (
      <div>
        <BxDetail
          handleSubmit={this.handleSubmit}
          handleCx={this.handleCx}
          value={value}
          id={e}
        />
      </div>
    );
  }
}
export default connect(({ submission }) => ({ submission }))(Detail);
