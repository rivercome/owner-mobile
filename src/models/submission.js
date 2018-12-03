import {
  getSubmissionList,
  submitMessage,
  submitThing,
  handleCx,
  getDetail
} from "../services/api";
import { message } from "antd";
import { routerRedux } from "dva/router";
export default {
  namespace: "submission",

  state: {},

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *getSubmissionList({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(getSubmissionList, payload);
      console.log(response);
      yield put({ type: "saveList", payload: response });
    },
    *handleSubmit({ payload }, { call, put }) {
      const response = yield call(submitMessage, payload);
      console.log(response);
      if (response.code === 1000) {
        message.success("提交成功");
        routerRedux.push("/submissionList");
      }
      return response;
    },
    *submitThing({ payload }, { call }) {
      console.log(payload);
      const response = yield call(submitThing, payload);
      console.log(response);
      if (response.code === 1003) {
        message.error("该项目未办结");
      } else if (response.code === 1000) {
        message.success("提交成功");
      }
    },
    *handleCx({ payload }, { call }) {
      const response = yield call(handleCx, payload);
      console.log(response);
    },
    *getDetail({ payload }, { call, put }) {
      const response = yield call(getDetail, payload);
      console.log(response);
      yield put({
        type: "saveDetail",
        payload: response
      });
    }
  },

  reducers: {
    saveList(state, action) {
      return { ...state, list: action.payload };
    },
    saveDetail(state, action) {
      return { ...state, detail: action.payload };
    }
  }
};
