import request from "@/utils/request";

export const login = (data) => request({
  url: '/v1_0/authorizations',
  method: 'post',
  data
})