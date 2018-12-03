import React from "react";
import { Carousel, WingBlank, NavBar, Card, WhiteSpace } from "antd-mobile";
import styles from "./index.less";
export default class Main extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "http://wdlj.zoomdong.xin/neuq11.jpg",
          "http://wdlj.zoomdong.xin/neuq22.jpg",
          "http://wdlj.zoomdong.xin/neuq33.jpg"
        ]
      });
    }, 800);
  }
  render() {
    return (
      <div>
        <NavBar
          style={{ backgroundColor: "rgb(166, 162, 162)", color: "black" }}
          leftContent=""
          onLeftClick={this.handleBack}
        >
          <span className={styles.navheader}>秦皇岛物业平台</span>
        </NavBar>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={index => console.log("slide to", index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href=" "
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{
                    width: "100%",
                    verticalAlign: "top",
                    height: "30vh"
                  }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <div className={styles.content}>
          <ul className={styles.wrapper}>
            <li>我要报修</li>
            <li>我要建议</li>
            <li>我要投诉</li>
          </ul>
        </div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={
                <span
                  style={{
                    color: "rgb(7, 17, 249)",
                    fontSize: "16px",
                    fontWeight: "700"
                  }}
                >
                  代办事宜
                </span>
              }
              // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span className={styles.extra}>历史信息</span>}
            />
            <Card.Body>
              <p>姓 名: 张XX</p>
              <p>手机号: 13933529XXX</p>
              <p>小 区: 在水一方A区</p>
              <p>房 号: 19栋 2单元 401号</p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header
              title={
                <span
                  style={{
                    color: "rgb(7, 17, 249)",
                    fontSize: "16px",
                    fontWeight: "700"
                  }}
                >
                  通知公告
                </span>
              }
              // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span className={styles.extra}>近3月/近半年/近一年</span>}
            />
            <Card.Body>
              <p>碧海云天小区</p>
              <p>1栋 2单元 1105号</p>
              <hr style={{ color: "#ddd" }} />
              <p>青馨家园小区</p>
              <p>1栋 4单元 1005号</p>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}
