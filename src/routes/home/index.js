import React, { Fragment } from "react";
import styles from "./index.less";
import { Carousel, Card, WingBlank, WhiteSpace, Button } from "antd-mobile";
import PropTypes from "prop-types";
const opendata = [
  {
    content: "物业合同履行情况",
    url: ""
  },
  {
    content: "公共费用分摊公示",
    url: ""
  },
  {
    content: "委托经营情况公示",
    url: ""
  },
  {
    content: "公共维修基金使用",
    url: ""
  },
  {
    content: "业委会信息",
    url: ""
  },
  {
    content: "业委会工作记录",
    url: ""
  },
  {
    content: "物业企业信息",
    url: "/companyinfo"
  },
  {
    content: "小区信息",
    url: "/neighborinfo"
  },
  {
    content: "诚信公示",
    url: ""
  }
];
const servicedata = [
  {
    content: "业主报修",
    url: ""
  },
  {
    content: "业主建议",
    url: ""
  },
  {
    content: "业主投诉",
    url: ""
  },
  {
    content: "代办事宜",
    url: ""
  },
  {
    content: "政策法规",
    url: "/rules"
  },
  {
    content: "通知公告",
    url: "/acounce"
  },
  {
    content: "常用电话",
    url: "/call"
  }
];

export default class Home extends React.Component {
  state = {
    res: ""
  };
  componentShow(res) {
    switch (res) {
      case "service":
        return <HomeService />;
      case "open":
        return <HomeOpen />;
      case "info":
        return <HomeInfo />;
      default:
        return <Main />;
    }
  }
  handleClick = click => {
    this.setState({
      res: click
    });
  };
  render() {
    return (
      <Fragment>
        {this.componentShow(this.state.res)}
        <div className={styles.footer}>
          <ul>
            <li
              onClick={() => {
                this.handleClick("service");
              }}
            >
              便民服务
            </li>
            <li
              onClick={() => {
                this.handleClick("open");
              }}
            >
              公开公示
            </li>
            <li
              onClick={() => {
                this.handleClick("info");
              }}
            >
              我的信息
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

class HomeService extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "86vh",
          textAlign: "center"
        }}
      >
        <img
          src="http://wdlj.zoomdong.xin/neuq11.jpg"
          alt="bgc"
          style={{ width: "100%", height: "40vh" }}
        />
        <div className={styles.openwrapper}>
          <ul className={styles.opencontent}>
            {servicedata.map((item, index) => {
              // console.log(item.url);
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.handlePush(`${item.url}`);
                  }}
                >
                  {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
class HomeOpen extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "86vh",
          textAlign: "center"
        }}
      >
        <img
          src="http://wdlj.zoomdong.xin/neuq22.jpg"
          alt="bgc"
          style={{ width: "100%", height: "40vh" }}
        />
        <div className={styles.openwrapper}>
          <ul className={styles.opencontent}>
            {opendata.map((item, index) => {
              // console.log(item.url);
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.handlePush(`${item.url}`);
                  }}
                >
                  {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

class HomeInfo extends React.Component {
  render() {
    return (
      <div
        className={styles.infoContent}
        style={{
          backgroundColor: "white",
          height: "86vh",
          textAlign: "center"
        }}
      >
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={<span style={{ color: "blue" }}>当前我的信息</span>}
            />
            <Card.Body>
              <p>姓 名: 张XX</p>
              <p>手机号: 13933529XXX</p>
              <p>小 区: 在水一方A区</p>
              <p>房 号: 19栋 2单元 401号</p>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={<span style={{ color: "blue" }}>我的其他房屋</span>}
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
        <Button type="primary" size="middle">
          退出登录
        </Button>
      </div>
    );
  }
}
class Main extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };
  static contextTypes = {
    router: PropTypes.object
  };
  componentDidMount() {
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
        <WingBlank>
          <Carousel autoplay={true} infinite>
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
