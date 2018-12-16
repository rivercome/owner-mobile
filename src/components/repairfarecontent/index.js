import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class Repairfarecontent extends React.Component {
  getdata = () => {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch({
      type: "wxzj/getRepairefareContent",
      payload: id
    });
  };
  componentDidMount() {
    this.getdata();
  }
  render() {
    const value = this.props.wxzj.value ? this.props.wxzj.value.data : "";
    return (
      <Fragment>
        <div className={styles.header}>
          <p>维修基金使用情况公示</p>
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>公示日期: {value && value.dgsrq}</li>
            <li>计划维修日期(起): {value && value.djhwxrq_q}</li>
            <li>计划维修日期(止): {value && value.djhwxrq_z}</li>
            <li>维修项目: {value && value.swxxm}</li>
            <li>维修项目简述: {value && value.swxxmjs}</li>
            <li>预算金额: {value && value.nysje}</li>
            <li>总业主数: {value && value.nzyzs}</li>
            <li>同意总业主数: {value && value.ntyzyzs}</li>
            <li>总业主房屋面积: {value && value.nzyzsfwmj}</li>
            <li>同意业主房屋面积: {value && value.ntyzyzsfwmj}</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default connect(({ wxzj }) => ({ wxzj }))(Repairfarecontent);
