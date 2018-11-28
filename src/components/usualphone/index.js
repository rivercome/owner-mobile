import React, { Fragment } from "react";
import styles from "./index.less";

const phoneInfo = [
  {
    content: "物业服务中心:  ",
    num: "*********"
  },
  {
    content: "社区门岗:  ",
    num: "*********"
  },
  {
    content: "社区警务:  ",
    num: "*********"
  },
  {
    content: "市长热线:  ",
    num: "*********"
  },
  {
    content: "应急报修:  ",
    num: "*********"
  },
  {
    content: "应急救护:  ",
    num: "*********"
  },
  {
    content: "资源回收:  ",
    num: "*********"
  },
  {
    content: "快递投送:  ",
    num: "*********"
  }
];

export default class Call extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          <p>常用电话</p>
        </div>
        <div className={styles.wrapper}>
          <ul>
            {phoneInfo.map((item, index) => {
              return (
                <li key={index}>{`${item.content}` + "  " + `${item.num}`}</li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}
