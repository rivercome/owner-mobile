import { getAnouce, getAnouceContent } from "../services/api";

export default {
  namespace: "tongzhi",
  state: {},
  effects: {
    *getAnouce({ payload }, { call, put }) {
      const response = yield call(getAnouce, payload);
      console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *getAnouceContent({ payload }, { call, put }) {
      const response = yield call(getAnouceContent, payload);
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
