import { getDbsy, clickPush } from "../services/api";
import { push } from "react-router-redux";
import { routerRedux } from "dva/router";

export default {
  namespace: "dbsy",

  state: {
    content: ""
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *getDbsy({ payload }, { call, put }) {
      console.log("lpf2"); // eslint-disable-line
      const response = yield call(getDbsy, payload);
      console.log(response);
      // const res = response.data;
      yield put({
        type: "saveContent",
        payload: {
          response
        }
      });
    }
    // *clickPush({ payload }, { call, put }) {
    //   // eslint-disable-line
    //   console.log("111111");
    //   const response = yield call(clickPush, payload);
    //   console.log(response);
    //   yield put({
    //     type: 'saveValue',
    //     payload: {
    //       response
    //     },
    //   });
    //   if(response.code===1000){
    //     yield put(routerRedux.push('/d'))
    //   }
    // },
  },

  reducers: {
    saveContent(state, action) {
      return { ...state, content: action.payload };
    },
    saveValue(state, action) {
      return { ...state, value: action.payload };
    }
  }
};
