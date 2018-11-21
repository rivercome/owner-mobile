import React, { Component } from "react";
import { connect } from "dva";
import { List } from "antd-mobile";
import styles from "./index.less";

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
  handleClick = id => {
    console.log("sxcdsc");
    this.props.dispatch({
      type: "dbsy/clickPush",
      payload: id
    });
  };
  render() {
    const { content } = this.props.dbsy;
    const value = content.response || [];
    console.log(value);
    let tmp = value.map(item => {
      let keys = Object.keys(item);
      return keys.map(key => item[key]);
    });
    let result = [];
    tmp.forEach(item => {
      result.push(item[0][0]);
    });
    console.log("result", result);
    return (
      <div>
        <div className={styles.title}>
          待办事宜
          <div>
            <List renderHeader={() => "待办事宜"}>
              {result.map((item, index) => {
                if (item !== undefined) {
                  return (
                    <Item
                      arrow="horizontal"
                      onClick={() => {
                        this.handleClick(item.id);
                      }}
                    >
                      {item.sbt}
                    </Item>
                  );
                }
              })}
            </List>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(({ dbsy }) => ({ dbsy }))(DBSY);
