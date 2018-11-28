import { getList } from "../services/api";

//数据逻辑处理分发
export default {
  namespace: "List",

  state: {
    content: ""
  },

  effects: {
    *getListmessage({ payload }, { call, put }) {
      const response = yield call(getList, payload);
      yield put({
        type: "saveListMessage",
        payload: {
          response
        }
      });
    }
  },

  reducers: {
    saveListMessage(state, action) {
      return { ...state, content: action.payload };
    }
  }
};
