import useUserStore from "@/store/modules/user";
import axios from "axios";

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net'
})

const userStore = useUserStore()
request.interceptors.request.use(config => {
  const user = userStore.user
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  return config
})

request.interceptors.response.use((response) => {

  return response.data
})
export default request