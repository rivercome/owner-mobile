import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class Call extends React.Component {
  state = {};

  getdata = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "usualcall/getCall",
      payload: ""
    });
  };

  componentDidMount() {
    this.getdata();
  }

  render() {
    const emm1 = this.props.usualcall.list;
    return (
      <Fragment>
        <div className={styles.header}>
          <p>常用电话</p>
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>
              {`物业服务中心: `}
              {emm1 ? emm1.data.swyfwzx : ""}
            </li>
            <li>
              {`社区门岗: `}
              {emm1 ? emm1.data.ssqmg : ""}
            </li>
            <li>
              {`社区警务: `}
              {emm1 ? emm1.data.ssqjw : ""}
            </li>
            <li>
              {`市长热线: `}
              {emm1 ? emm1.data.sszrx : ""}
            </li>
            <li>
              {`应急报修: `}
              {emm1 ? emm1.data.syjbx : ""}
            </li>
            <li>
              {`应急救护: `}
              {emm1 ? emm1.data.syjjh : ""}
            </li>
            <li>
              {`资源回收: `}
              {emm1 ? emm1.data.szyhs : ""}
            </li>
            <li>
              {`快递投送: `}
              {emm1 ? emm1.data.skdts : ""}
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default connect(({ usualcall }) => ({ usualcall }))(Call);
