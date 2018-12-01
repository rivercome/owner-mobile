export default {
  namespace: "oldBuilding",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
    *getData({ payload }, { call, put }) {
      // const response=yield call(getData,payload)
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
