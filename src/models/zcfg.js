import { getRules, getRulesContent } from "../services/api";

export default {
  namespace: "zcfg",
  state: {},
  effects: {
    *getRules({ payload }, { call, put }) {
      const response = yield call(getRules, payload);
      // console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *getRulesContent({ payload }, { call, put }) {
      const response = yield call(getRulesContent, payload);
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
