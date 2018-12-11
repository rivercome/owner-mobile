import React, { Fragment } from "react";
import styles from "./index.less";
import { Select } from "antd";
import { Card, SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
import { List } from "antd";
import { connect } from "dva";
import PropTypes from "prop-types";
const Option = Select.Option;

const data = [{}, {}];

class Anouce extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  state = {
    value: "",
    mydata: ""
  };

  getData = () => {
    this.props.dispatch({
      type: "tongzhi/getAnouce",
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
    const value = this.props.tongzhi.list ? this.props.tongzhi.list.data : "";
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
            {value
              ? value.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className={styles.top}>
                        <p className={styles.title}>{item.sbt}</p>
                        <p className={styles.date}>{item.dfbsj}</p>
                      </div>
                      <div className={styles.bottom}>
                        <p className={styles.comp}>发布单位: {item.sfbr}</p>
                        <p
                          className={styles.see}
                          onClick={() => {
                            this.context.router.history.push(
                              `/anoucecontent/${item.id}`
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
export default connect(({ tongzhi }) => ({ tongzhi }))(Anouce);
