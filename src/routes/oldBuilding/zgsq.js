import React, { Component } from "react";
import { connect } from "dva";
import OldBuilding from "../../components/oldBuilding";

class ZGSQ extends Component {
  constructor() {
    super();
    this.state = {
      message: "abc",
      show: false
    };
  }
  render() {
    return (
      <div>
        <OldBuilding message={this.state.message} show={this.state.show} />
      </div>
    );
  }
}
export default connect(({ oldBuilding }) => ({ oldBuilding }))(ZGSQ);
