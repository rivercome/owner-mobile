import { getSubmissionList, submitMessage } from "../services/api";
export default {
  namespace: "submission",

  state: {},

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *getSubmissionList({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(getSubmissionList, payload);
      console.log(response);
      yield put({ type: "saveList", payload: response });
    }
  },
  *handleSubmit({ payload }, { call, put }) {
    console.log("xasxasx");
    const response = yield call(submitMessage, payload);
    console.log("csdc");
    console.log(response);
  },

  reducers: {
    saveList(state, action) {
      return { ...state, list: action.payload };
    }
  }
};
