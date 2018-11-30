import { getTsList, handleTsSubmit } from "../services/api";
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
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
    *getTsList({ payload }, { call, put }) {
      const response = yield call(getTsList, payload);
      console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *handleSubmit({ payload }, { call }) {
      const response = yield call(handleTsSubmit, payload);
      console.log(response);
      if (response.code === 1000) {
        message.success("提交成功");
        routerRedux.push("/tousuList");
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveList(state, action) {
      return { ...state, list: action.payload };
    }
  }
};
