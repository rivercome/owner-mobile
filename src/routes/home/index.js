import React from "react";
import {
  TabBar,
  NavBar,
  Card,
  WingBlank,
  WhiteSpace,
  Button
} from "antd-mobile";
import styles from "./index.less";
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
    selectedTab: "redTab",
    hidden: false,
    fullScreen: true
  };
  static contextTypes = {
    router: PropTypes.object
  };
  renderContent(pageText) {
    switch (pageText) {
      case "Service":
        return (
          <div
            style={{
              backgroundColor: "white",
              height: "86vh",
              textAlign: "center"
            }}
          >
            <img
              src="http://wdlj.zoomdong.xin/2.jpeg"
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
      case "Open":
        return (
          <div
            style={{
              backgroundColor: "white",
              height: "86vh",
              textAlign: "center"
            }}
          >
            <img
              src="http://wdlj.zoomdong.xin/2.jpeg"
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
      case "Information":
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
                  // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                  // extra={<span>this is extra</span>}
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
                  // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                  // extra={<span>this is extra</span>}
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
  handlePush = url => {
    this.context.router.history.push(url);
  };
  handleBack = () => {
    this.context.router.history.push("/main");
  };
  render() {
    console.log(this.state.users);
    return (
      <div>
        {/* <NavBar
          style={{ backgroundColor: "#eee", color: "black" }}
          leftContent="返回"
          onLeftClick={this.handleBack}
        >
          <span className={styles.navheader}>秦皇岛物业平台</span>
        </NavBar> */}

        <div>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              dot={false}
              title="便民服务"
              key="Life"
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selected={this.state.selectedTab === "blueTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "blueTab"
                });
              }}
              data-seed="logId"
            >
              {this.renderContent("Service")}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              title="公开公示"
              key="Koubei"
              // badge={'new'}
              dot={false}
              selected={this.state.selectedTab === "redTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "redTab"
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent("Open")}
            </TabBar.Item>

            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              title="我的信息"
              key="Friend"
              dot={false}
              selected={this.state.selectedTab === "greenTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "greenTab"
                });
              }}
            >
              {this.renderContent("Information")}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
