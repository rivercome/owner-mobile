import request from "../utils/request";
// 请求
export function query() {
  return request("/api/users");
}
