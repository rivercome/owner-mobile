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
