import { getCompanyInfo } from "../services/api";

export default {
  namespace: "qyxx",
  state: {},
  effects: {
    *getCompanyInfo({ payload }, { call, put }) {
      const response = yield call(getCompanyInfo, payload);
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
