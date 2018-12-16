import { getEntrust, getEntrustContent } from "../services/api";

export default {
  namespace: "wtjy",
  state: {},
  effects: {
    *getEntrust({ payload }, { call, put }) {
      const response = yield call(getEntrust, payload);
      //   console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *getEntrustContent({ payload }, { call, put }) {
      const response = yield call(getEntrustContent, payload);
      yield put({
        type: "saveContent",
        payload: response
      });
    }
  },
  reducers: {
    saveList(state, action) {
      return { ...state, list: action.payload };
    },
    saveContent(state, action) {
      return { ...state, value: action.payload };
    }
  }
};
