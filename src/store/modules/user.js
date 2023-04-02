import { clear, getItem, setItem } from "@/utils/Cache";
import { defineStore } from "pinia";

const TOKEN_KEY = 'TOKEN_KEY'
const useUserStore = defineStore('user', {
  state: () => ({
    user: getItem(TOKEN_KEY)
  }),
  actions: {
    setUserInfo(data) {
      this.user = data
      setItem(TOKEN_KEY, data)
    }
  },
  getters: {

  }
})

export default useUserStore