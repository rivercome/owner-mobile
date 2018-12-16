import { getContact, getContactContent } from "../services/api";

export default {
  namespace: "htlx",
  state: {},
  effects: {
    *getContact({ payload }, { call, put }) {
      const response = yield call(getContact, payload);
      //   console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *getContactContent({ payload }, { call, put }) {
      const response = yield call(getContactContent, payload);
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
