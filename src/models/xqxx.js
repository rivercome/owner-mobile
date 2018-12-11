import { getNeighInfo } from "../services/api";

export default {
  namespace: "xqxx",
  state: {},
  effects: {
    *getNeighInfo({ payload }, { call, put }) {
      const response = yield call(getNeighInfo, payload);
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
