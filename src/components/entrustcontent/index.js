import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class EntrustContent extends React.Component {
  getdata = () => {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch({
      type: "wtjy/getEntrustContent",
      payload: id
    });
  };
  componentDidMount() {
    this.getdata();
  }
  render() {
    // console.log(this.props.wtjy.value);
    const value = this.props.wtjy.value ? this.props.wtjy.value.data : "";
    return (
      <Fragment>
        <p className={styles.header}>委托经营收支情况公示</p>
        <div className={styles.content}>
          <ul>
            <li>公示标题: {value && value.sgsbt}</li>
            <li>公示日期: {value && value.sgsrq}</li>
            <li>周期(起): {value && value.dzq_q}</li>
            <li>周期(止): {value && value.dzq_z}</li>
            <li>备注: {value && value.sbz}</li>
          </ul>
          <p className={styles.contentheader}>公示内容: </p>
          <div
            className={styles.content1}
            dangerouslySetInnerHTML={value && value.sgsnr}
          />
        </div>
        <div className={styles.footer}>
          <ul>
            <li>附件一</li>
            <li>附件二</li>
            <li>附件三</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default connect(({ wtjy }) => ({ wtjy }))(EntrustContent);
