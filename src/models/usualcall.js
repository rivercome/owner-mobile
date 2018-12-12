import { getCall } from "../services/api";

export default {
  namespace: "usualcall",

  state: {},

  effects: {
    *getCall({ payload }, { call, put }) {
      const response = yield call(getCall, payload);
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
    }
  }
};
