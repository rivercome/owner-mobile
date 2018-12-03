import React, { Fragment } from "react";
import styles from "./index.less";
import { Select } from "antd";
import { Card, SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
import { List } from "antd";

const Option = Select.Option;

const data = [{}, {}];

export default class Anouce extends React.Component {
  state = {
    value: "",
    mydata: ""
  };

  getData() {
    fetch("http://154.8.214.49:8080/sjd/tzgg/search", {
      method: "GET",
      headers: {
        token: localStorage.token,
        token_type: "yz"
      }
    }).then(res =>
      res.json().then(data => {
        // console.log(data);
        this.setState({
          mydata: data
        });
      })
    );
  }
  componentWillMount() {
    this.getData();
  }

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
    console.log(this.state.mydata.data);
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
          <p>通知公告</p>
          <ul>
            {this.state.mydata.data
              ? this.state.mydata.data.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className={styles.top}>
                        <p className={styles.title}>{item.sbt}</p>
                        <p className={styles.date}>{item.dfbsj}</p>
                      </div>
                      <div className={styles.bottom}>
                        <p className={styles.comp}>发布单位: {item.sfbr}`</p>
                        <p className={styles.see}>查看</p>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </Fragment>
    );
  }
}
