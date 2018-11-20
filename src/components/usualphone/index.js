import React, { Fragment } from "react";
import styles from "./index.less";
import { Card } from "antd-mobile";

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
        <Card>
          <Card.Header title={<span className={styles.title}>常用电话</span>} />
          <Card.Body>
            <div>
              <ul>
                {phoneInfo.map((item, index) => {
                  return (
                    <li key={index}>
                      {`${item.content}` + "  " + `${item.num}`}
                    </li>
                  );
                })}
                <li />
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}
