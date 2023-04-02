import request from "@/utils/request";

export const login = (data) => request({
  url: '/v1_0/authorizations',
  method: 'post',
  data
})

export const getCode = (params) => request({
  url: `/v1_0/sms/codes/${params}`,
})

export const getUserInfo = () => request({
  url: '/v1_0/user'
})