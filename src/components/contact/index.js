import React, { Fragment } from "react";
import styles from "../common.less";
import { Select } from "antd";
import { Card, SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
import { List } from "antd";
import { connect } from "dva";
import PropTypes from "prop-types";
const Option = Select.Option;

const data = [{}, {}];

class Contact extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  state = {
    value: "",
    mydata: ""
  };

  getData = () => {
    this.props.dispatch({
      type: "htlx/getContact",
      payload: ""
    });
  };
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
    const value1 = this.props.htlx.list ? this.props.htlx.list.data : "";
    console.log(value1);
    const value = "";
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
          <p>合同履行情况公示</p>
          <ul>
            {value1
              ? value1.data.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className={styles.top}>
                        <p className={styles.title}>{item.tgsbt}</p>
                        <p className={styles.date}>{item.dgsrq}</p>
                      </div>
                      <div className={styles.bottom}>
                        <p className={styles.comp}>发布单位: {item.sqymc}</p>
                        <p
                          className={styles.see}
                          onClick={() => {
                            this.context.router.history.push(
                              `/contactcontent/${item.id}`
                            );
                          }}
                        >
                          查看
                        </p>
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
export default connect(({ htlx }) => ({ htlx }))(Contact);
