import request from "../utils/request";
import config from "./config";

const { basePath } = config;

export async function getZlpj(params) {
  return request("/api/rule", {
    method: "POST",
    body: {
      ...params,
      method: "delete"
    }
  });
}

export async function getDbsy() {
  console.log("lpf");
  return request(`${basePath}/sjd/dbsx/list`, {
    method: "GET"
  });
}

export async function clickPush(id) {
  console.log("sdacsdcdscdscdcdscdscd");
  return request(`${basePath}/sjd/dbsx/zlpj/table?${id}`, {
    method: "GET"
  });
}

export async function getList() {
  //请求写在这里

  console.log("hanwei");
  return request(`${basePath}/sjd/yzxgxx/qyxx`, {
    method: "GET"
    // url: "http://154.8.214.49:8080/yzzh/login",
    // headers: {
    //   'Content-Type' : "13933528963",
    //   'token': "maoqiu...",
    //   'token_type': "yzzh"
    // }
  });
}
