import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { List } from "antd-mobile";
import styles from "./index.less";
import { string } from "prop-types";

const Item = List.Item;
class DBSY extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getValue = () => {
    this.props.dispatch({
      type: "dbsy/getDbsy",
      payload: ""
    });
  };

  componentDidMount() {
    this.getValue();
  }
  handleClick = (id, type) => {
    if (type == "01") {
      this.props.dispatch(
        routerRedux.push({
          pathname: `/qualityEvaluation/${id}`,
          query: { id: id }
        })
      );
    }
  };
  render() {
    const content = this.props.dbsy;
    console.log(content);
    const tag = typeof content.content;
    const value = tag == "string" ? [{ sbt: "", sfbdw: "" }] : content.content;
    console.log(value);
    // console.log(value);
    // let tmp = value.map(item => {
    //   let keys = Object.keys(item);
    //   return keys.map(key => item[key]);
    // });
    // let result = [];
    // tmp.forEach(item => {
    //   result.push(item[0][0]);
    // });
    // console.log("result", result);
    return (
      <div>
        <div className={styles.title}>
          待办事宜
          <div>
            <List renderHeader={() => "待办事宜"}>
              {value.map((item, index) => {
                return (
                  <Item
                    arrow="horizontal"
                    onClick={() => {
                      this.handleClick(item.id, item.type);
                    }}
                  >
                    {item.sbt}
                    {item.sfbdw}
                  </Item>
                );
              })}
            </List>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(({ dbsy }) => ({ dbsy }))(DBSY);
