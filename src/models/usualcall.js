import { getCall } from "../services/api";
import { push } from "react-router-redux";
import { routerRedux } from "dva/router";

export default {
  namespace: "usualcall",

  state: {},

  effects: {
    *getCall({ payload }, { call, put }) {
      const response = yield call(getCall, payload);
      yield put({
        type: "saveList",
        payload: response
      });
    }
  },

  reducers: {
    saveList(state, action) {
      return { ...state, list: action.payload };
    }
  }
};
