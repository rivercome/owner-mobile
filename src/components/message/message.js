import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../components/message/message.less";
import { Select, Input } from "antd";
import { List, Button, WhiteSpace } from "antd-mobile";
import { connect } from "dva";

const Option = Select.Option;
const Search = Input.Search;
const Item = List.Item;
const Brief = Item.Brief;
const data = [
  {
    title: "2017年***公共费用分摊公示",
    date: "2018-10-10",
    subtitle: "发布单位：物业企业"
  },
  {
    title: "*************费用分摊情况公示",
    date: "2018-10-10",
    subtitle: "发布单位：物业企业"
  }
];

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  handleChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <div>
        <Select
          className={styles.select}
          defaultValue="半年内"
          onChange={this.handleChange}
        >
          <Option value="half">半年内</Option>
          <Option value="one">一年内</Option>
          <Option value="all">全部</Option>
        </Select>
        <Search
          onSearch={value => console.log(value)}
          className={styles.search}
        />
        <div className={styles.spanCon}>公共水电费用分摊情况公示</div>
        <div className={styles.show}>
          <List className="my-list">
            {data.map((item, index) => {
              return (
                <Item key={index} extra={item.date} align="top" multipleLine>
                  {item.title} <Brief>{item.subtitle}</Brief>
                </Item>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default connect(({ message }) => ({ message }))(Message);
