import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class Commonfarecontent extends React.Component {
  getdata = () => {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch({
      type: "ggfy/getCommonfareContent",
      payload: id
    });
  };
  componentDidMount() {
    this.getdata();
  }
  render() {
    const value = this.props.ggfy.value ? this.props.ggfy.value.data : "";
    return (
      <Fragment>
        <p className={styles.header}>公共水电费用均摊情况</p>
        <div className={styles.content}>
          <ul>
            <li>公示标题: {value && value.sgsbt}</li>
            <li>公示日期: {value && value.dgsrq}</li>
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
export default connect(({ ggfy }) => ({ ggfy }))(Commonfarecontent);
