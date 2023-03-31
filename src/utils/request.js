import axios from "axios";

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net'
})

request.interceptors.response.use((response) => {

  return response.data
})
export default request