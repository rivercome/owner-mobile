import {
  getJyList,
  handleJySubmit,
  jianYiGetDetail,
  jianYiCx,
  jianYiSubmit
} from "../services/api";
import { message } from "antd";
export default {
  namespace: "jianyi",

  state: {},

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
    *handleSubmit({ payload }, { call }) {
      console.log(payload);
      const response = yield call(handleJySubmit, payload);
      console.log(response);
      // if (response.code === 1000) {
      //   message.success("提交成功");
      //   routerRedux.push("/tousuList");
      // }
    },
    *getDetail({ payload }, { call, put }) {
      const response = yield call(jianYiGetDetail, payload);
      console.log(response);
      yield put({
        type: "saveDetail",
        payload: response
      });
    },
    *submitThing({ payload }, { call }) {
      console.log(payload);
      const response = yield call(jianYiSubmit, payload);
      console.log(response);
      if (response.code === 1003) {
        message.error("该项目未办结");
      } else if (response.code === 1000) {
        message.success("提交成功");
      }
    },
    *handleCx({ payload }, { call }) {
      const response = yield call(jianYiCx, payload);
      console.log(response);
      if (response.code === 1000) {
        message.success("撤回成功");
      }
    },
    *getJyList({ payload }, { call, put }) {
      const response = yield call(getJyList, payload);
      console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    }
  },

  reducers: {
    saveList(state, action) {
      return { ...state, list: action.payload };
    },
    saveDetail(state, action) {
      return { ...state, value: action.payload };
    }
  }
};
