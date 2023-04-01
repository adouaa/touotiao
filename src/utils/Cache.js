export const setItem = (key, data) => {
  // 判断：如果data是数组或者对象，则需要以JSON格式的字符串进行存储，否则直接存储data即可
  if (typeof data === 'object') {
    localStorage.setItem(key, JSON.stringify(data))
  }
  localStorage.setItem(key, data)
}

export const getItem = (key) => {
  const data = localStorage.getItem(key)
  // if (data) return JSON.parse(data)

  /**
   * 这边用try-catch的目的是：
    * 如果 data是一个有效的JSON格式字符串，则返回解析后的数据
    * 如果 data不是一个有效的JSON格式字符串，则会发生错误，然后进入 catch，直接返回data
   */
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export const clear = () => {
  localStorage.clear()
}