import request from "../utils/request";
import config from "./config";

const { basePath } = config;
const tag = true;
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
export async function login(values) {
  console.log("dfsdf");
  const body = {
    login_name: values.a,
    password: values.b,
    login_type: "yzzh"
  };
  console.log(body);
  return request(
    `${basePath}/yzzh/login`,
    {
      method: "POST",
      body: body
    },
    tag
  );
}
export async function getSubmissionList() {
  return request(`${basePath}/sjd/yzbx/list`, {
    method: "GET"
  });
}
export async function submitMessage(params) {
  console.log("llllllllllll");
  return request(`${basePath}/sjd/yzbx/create`, {
    method: "POST",
    body: params
  });
}
// export async function fakeAccountLogin(params) {
//   console.log('params', params);
//   return request(`${API_PREFIX}/user/login`, {
//     method: 'POST',
//     body: {
//       login_name: params.userName,
//       password: params.password,
//       login_type: 'qy',
//     },
//   });
// }
