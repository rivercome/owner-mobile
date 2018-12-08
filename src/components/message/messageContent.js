import React, { Component } from "react";
import styles from "../../components/message/messageContent.less";
import { connect } from "dva";

const data = [
  {
    first: "公示标题： ",
    second: "楼道照明费用公摊公示"
  },
  {
    first: "公示日期： ",
    second: "2018年10月1日"
  },
  {
    first: "周期（起）： ",
    second: "2017年1月1日"
  },
  {
    first: "周期（止）： ",
    second: "2017年12月31日"
  },
  {
    first: "备  注： ",
    second: "**********"
  }
];
const appendix = ["附件一", "附件二", "附件三"];

class MessageContent extends Component {
  render() {
    return (
      <div>
        <div className={styles.title}>
          <span>title</span>
        </div>
        <div className={styles.content}>
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index}>{`${item.first}` + "  " + `${item.second}`}</li>
              );
            })}
            <li>公示内容：</li>
          </ul>
          <div className={styles.contentInformation}>***</div>
        </div>
        <span className={styles.spanStyle}>附件：</span>

        <div className={styles.appendix}>
          <ul>
            {appendix.map((item, index) => {
              return <li key={index}>{`${item}`}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(({ messagecontent }) => ({ messagecontent }))(
  MessageContent
);
