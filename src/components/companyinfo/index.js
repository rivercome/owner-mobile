import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class CompanyInfo extends React.Component {
  getData = () => {
    this.props.dispatch({
      type: "qyxx/getCompanyInfo",
      payload: ""
    });
  };
  componentWillMount() {
    this.getData();
  }
  render() {
    const value = this.props.qyxx.list ? this.props.qyxx.list.data : "";
    return (
      <Fragment>
        <div className={styles.header}>
          <p>当前物业企业服务信息: </p>
        </div>
        <div className={styles.content}>
          <ul>
            <li key="1">企业名称: {value && value.sqymc}</li>
            <li key="2">社会信用代码: {value && value.sshxydm}</li>
            <li key="3">成立日期: {value && value.dclrq}</li>
            <li key="4">法定代表人: {value && value.sfddbr}</li>
            <li key="5">注册资金(万元): {value && value.nzczj}</li>
            <li key="6">办公地址: {value && value.sbgdz}</li>
            <li key="7">单位联系人: {value && value.slxr}</li>
            <li key="8">单位联系人电话(固话): {value && value.slxdh_gh}</li>
            <li key="9">单位联系人电话(手机): {value && value.slxdh_sj}</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default connect(({ qyxx }) => ({ qyxx }))(CompanyInfo);
