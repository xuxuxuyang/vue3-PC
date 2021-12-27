// 配置默认的baseURL和超时时间
let baseURL = ''
let Timeout = 10000
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://152.136.185.210:5000'
}
export { baseURL, Timeout }
