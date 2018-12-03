import {
  getTsList,
  handleTsSubmit,
  tousuSubmit,
  tousuCx,
  tousuGetDetail
} from "../services/api";
import { message } from "antd";
import { routerRedux } from "dva/router";
export default {
  namespace: "tousu",

  state: {},

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *getTsList({ payload }, { call, put }) {
      const response = yield call(getTsList, payload);
      console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *handleSubmit({ payload }, { call }) {
      console.log(payload);
      const response = yield call(handleTsSubmit, payload);
      console.log(response);
      if (response.code === 1000) {
        message.success("提交成功");
        routerRedux.push("/tousuList");
      }
    },
    *submitThing({ payload }, { call }) {
      console.log(payload);
      const response = yield call(tousuSubmit, payload);
      console.log(response);
      if (response.code === 1003) {
        message.error("该项目未办结");
      } else if (response.code === 1000) {
        message.success("提交成功");
      }
    },
    *handleCx({ payload }, { call }) {
      const response = yield call(tousuCx, payload);
      console.log(response);
      if (response.code === 1000) {
        message.success("撤回成功");
      }
    },
    *getDetail({ payload }, { call, put }) {
      const response = yield call(tousuGetDetail, payload);
      console.log(response);
      yield put({
        type: "saveDetail",
        payload: response
      });
    }
  },

  reducers: {
    saveDetail(state, action) {
      return { ...state, value: action.payload };
    },
    saveList(state, action) {
      return { ...state, list: action.payload };
    }
  }
};
