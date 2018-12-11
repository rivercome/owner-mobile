import { getYWHInfo } from "../services/api";

export default {
  namespace: "ywhxx",
  state: {},
  effects: {
    *getYWHInfo({ payload }, { call, put }) {
      const response = yield call(getYWHInfo, payload);
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
