import request from "../utils/request";
import config from "./config";
// import { func } from "prop-types";

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
  return request(`${basePath}/sjd/dbsx/list`, {
    method: "GET"
  });
}
export async function getQualityData(id) {
  return request(`${basePath}/sjd/dbsx/zlpj/table/${id}`, {
    method: "GET"
  });
}
export async function submitQuality(params) {
  return request(`${basePath}/sjd/dbsx/zlpj/vote/${params.id}`, {
    method: "POST",
    body: params.value
  });
}
export async function getZgsqData(params) {
  // return request(`${basePath}/`)
}
export async function gzsqTp(params) {
  return request(`${basePath}/sjd/ljxq/zgsq/tp`, {
    method: "POST",
    body: params
  });
}
export async function gzfaTp(params) {
  return request(`${basePath}//sjd/ljxq/gzfa/tp`, {
    method: "POST",
    body: params
  });
}
export async function zxysTp(params) {
  return request(`${basePath}/sjd/ljxq/zxys/qr`, {
    method: "POST",
    body: params
  });
}
export async function glmsTp(params) {
  return request(`${basePath}/sjd/ljxq/glms/qr`, {
    method: "POST",
    body: params
  });
}
export async function zxpjTp(params) {
  return request(`${basePath}/sjd/ljxq/zxpj/dafen`, {
    method: "POST",
    body: params
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
export async function submitThing(params) {
  return request(`${basePath}/sjd/yzbx/eva/${params.id}`, {
    method: "POST",
    body: params.body
  });
}
export async function handleCx(params) {
  return request(`${basePath}/sjd/yzbx/recall/${params}`, {
    method: "DELETE"
  });
}
export async function getDetail(params) {
  return request(`${basePath}/sjd/yzbx/one/${params}`, {
    method: "GET"
  });
}
export async function getTsList() {
  return request(`${basePath}/sjd/yzts/list`, {
    method: "GET"
  });
}
export async function handleTsSubmit(params) {
  console.log(params);
  return request(`${basePath}/sjd/yzts/create`, {
    method: "POST",
    body: params
  });
}
export async function tousuSubmit(params) {
  return request(`${basePath}/sjd/yzts/eva/${params.id}`, {
    method: "POST",
    body: params.body
  });
}
export async function tousuCx(params) {
  return request(`${basePath}/sjd/yzts/recall/${params}`, {
    method: "DELETE"
  });
}
export async function tousuGetDetail(params) {
  return request(`${basePath}/sjd/yzts/one/${params}`, {
    method: "GET"
  });
}
export async function getJyList() {
  return request(`${basePath}/sjd/yzjy/list`, {
    method: "GET"
  });
}
export async function handleJySubmit(params) {
  return request(`${basePath}/sjd/yzjy/create`, {
    method: "POST",
    body: params
  });
}
export async function jianYiGetDetail(params) {
  return request(`${basePath}/sjd/yzjy/one/${params}`, {
    method: "GET"
  });
}
export async function jianYiSubmit(params) {
  return request(`${basePath}/sjd/yzjy/eva/${params.id}`, {
    method: "POST",
    body: params.body
  });
}
export async function jianYiCx(params) {
  return request(`${basePath}/sjd/yzjy/recall/${params}`, {
    method: "DELETE"
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
