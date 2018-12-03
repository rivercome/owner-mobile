import { routerRedux } from "dva/router";
import { login } from "../services/api";
import { message } from "antd";
export default {
  namespace: "login",

  state: {},

  effects: {
    *handleLogin({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(login, payload);
      console.log(response);

      if (response.code === 1000) {
        localStorage.setItem("token", response.data.token);
        yield put(routerRedux.push("/"));
      } else if (response.code === 1021) {
        message.error("密码错误");
      } else if (response.code === 1020) {
        message.error("账号不存在");
      } else if (response.code === 1032) {
        yield put(routerRedux.push("/Second"));
      }
      yield put({
        type: "saveBuilding",
        payload: { response }
      });
    }
  },

  reducers: {
    saveBuilding(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
