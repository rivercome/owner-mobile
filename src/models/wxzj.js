import { getRepairefare, getRepairefareContent } from "../services/api";

export default {
  namespace: "wxzj",
  state: {},
  effects: {
    *getRepairefare({ payload }, { call, put }) {
      const response = yield call(getRepairefare, payload);
      //   console.log(response);
      yield put({
        type: "saveList",
        payload: response
      });
    },
    *getRepairefareContent({ payload }, { call, put }) {
      const response = yield call(getRepairefareContent, payload);
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
