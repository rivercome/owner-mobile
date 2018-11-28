import React, { Fragment } from "react";
import styles from "./index.less";
import { Select } from "antd";
import { Card, SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
const Option = Select.Option;

const data = [{}, {}];
export default class Rules extends React.Component {
  state = {
    value: ""
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  onChange = value => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: "" });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  };

  render() {
    return (
      <Fragment>
        <div className={styles.wrapper}>
          <Select
            showSearch
            style={{ width: 100 }}
            defaultValue="1"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">半年内</Option>
            <Option value="2">一年内</Option>
            <Option value="3">全部</Option>
          </Select>
          <SearchBar
            placeholder="请输入查找内容"
            ref={ref => (this.autoFocusInst = ref)}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.title1}>政策法规</p>
          <p className={styles.title2}>管理规范</p>
        </div>
      </Fragment>
    );
  }
}
