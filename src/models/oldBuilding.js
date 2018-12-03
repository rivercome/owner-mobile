import {
  getZgsqData,
  gzsqTp,
  gzfaTp,
  zxysTp,
  glmsTp,
  zxpjTp
} from "../services/api";
import { message } from "antd";
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
      const response = yield call(getZgsqData, payload);
    },
    *gzsqTp({ payload }, { call }) {
      const response = yield call(gzsqTp, payload);
      console.log(response);
      if (response.code === 8002) {
        message.error("不可以重复投票");
      }
    },

    *gzfaTp({ payload }, { call }) {
      const response = yield call(gzfaTp, payload);
      console.log(response);
      if (response.code === 8002) {
        message.error("不可以重复投票");
      }
    },

    *zxysTp({ payload }, { call }) {
      const response = yield call(zxysTp, payload);
      console.log(response);
      if (response.code === 8002) {
        message.error("不可以重复投票");
      }
    },
    *glmsTp({ payload }, { call }) {
      const response = yield call(glmsTp, payload);
      console.log(response);
      if (response.code === 8002) {
        message.error("不可以重复投票");
      }
    },
    *zxpjTp({ payload }, { call }) {
      const response = yield call(zxpjTp, payload);
      console.log(response);
      if (response.code === 8002) {
        message.error("不可以重复打分");
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
