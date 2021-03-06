import React, { Component } from "react";
import { connect } from "dva";
import OldBuilding from "../../components/oldBuilding";

class ZGSQ extends Component {
  constructor() {
    super();
    this.state = {
      message: "abc",
      show: true,
      dfshow: false
    };
  }
  componentDidMount() {
    const e = this.props.match.params.id;
    // this.props.dispatch({
    //   type:'oldBuilding/getData',
    //   payload:e
    // })
  }
  handleSubmit = value => {
    this.props.dispatch({
      type: "oldBuilding/glmsTp",
      payload: value
    });
  };
  render() {
    const a = 4;
    return (
      <div>
        <OldBuilding
          message={this.state.message}
          show={this.state.show}
          handleSubmit={this.handleSubmit}
          id={this.props.match.params.id}
          tag={a}
          dfshow={this.state.dfshow}
        />
      </div>
    );
  }
}
export default connect(({ oldBuilding }) => ({ oldBuilding }))(ZGSQ);
