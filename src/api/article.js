import request from "@/utils/request";

export const articles = () => request({
  url: '/v1_0/articles'
})