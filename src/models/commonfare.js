import { getCommonfare, getCommonfareContent } from "../services/api";

export default {
  namespace: "ggfy",
  state: {},
  effects: {
    *getCommonfare({ payload }, { call, put }) {
      const response = yield call(getCommonfare, payload);
      //   console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *getCommonfareContent({ payload }, { call, put }) {
      const response = yield call(getCommonfareContent, payload);
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
