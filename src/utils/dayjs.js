import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

// 引入相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'

// dayjs 默认语言是英文，我们这里要配置为中文
dayjs.locale('zh-cn')

// 配置使用处理相对时间的插件
dayjs.extend(relativeTime)

export const getRelativeTime = (time) => {
  return dayjs().to(dayjs(time))
}
