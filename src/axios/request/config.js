import axios from 'axios'
// 配置默认的baseURL
let baseURL = ''
axios.defaults.baseURL = 'http://123.207.32.32:8000'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://123.207.32.32:8000'
}
axios.defaults.baseURL = baseURL
//配置超时时间
let Timeout = 10000
axios.defaults.timeout = Timeout
export { baseURL, Timeout }
