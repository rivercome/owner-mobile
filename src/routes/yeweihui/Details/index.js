import React, { Component } from "react";
import styles from "./index.less";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        dhyrq: "2018-06-07 00:00:00",
        shybt: "第一届工作室代表大会",
        sydsx: "甜粽子好吃还是咸粽子好吃?",
        shyjd: "甜的好吃,咸的都是异端",
        scjry: "全体人员"
      }
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p className={styles.title}>业委会信息:</p>
        <div className={styles.details}>
          <p>日期 :{data.dhyrq}</p>
          <p>标题 :{data.shybt}</p>
          <p>议定事项 :{data.sydsx}</p>
          <p>会议决定 :{data.shyjd}</p>
          <p>参加人员 ：{data.scjry}</p>
        </div>
      </div>
    );
  }

  getData() {
    fetch("http://154.8.214.49:8080/sjd/ywhgzjl/detail", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        let data = res.data;
        this.setState({ data });
      });
  }
  componentDidMount() {
    // this.getData();
  }
}

export default Details;
