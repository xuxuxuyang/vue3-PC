import axios from 'axios'
import { ElLoading } from 'element-plus'
class XYRequest {
  instance
  interceptors
  showloding
  loding
  constructor(config) {
    // 添加实例私人的拦截器
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showloding = config.showloding ?? true

    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
    // 添加全局请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // const showloding = config.showloding ?? true
        if (this.showloding) {
          this.loding = ElLoading.service({
            text: '正在加载中...'
          })
        }
        console.log('全局请求拦截')
        return config
      },
      (error) => {
        console.log('全局请求错误')
        return Promise.reject(error)
      }
    )
    // 添加全局响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        if (this.loding) {
          this.loding.close()
        }
        console.log('全局响应拦截')
        return response
      },
      (error) => {
        if (this.loding) {
          this.loding.close()
        }
        console.log('全局响应错误')
        return Promise.reject(error)
      }
    )
  }
  request(config) {
    return new Promise((resolve, reject) => {
      //单个请求对请求config的处理
      if (config.interceptors.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //判断是否需要显示loding
      if (config.showloding === false) {
        this.showloding = config.showloding
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //为了不影响其他的请求，最后需要初始化回来，发生请求时默认使显示loading
          this.showloding = true
          //将结果发出去
          resolve(res)
        })
        .catch((err) => {
          //为了不影响其他的请求，最后需要初始化回来，发生请求时默认使显示loading
          this.showloding = true
          reject(err)
          return err
        })
    })
  }
}
export default XYRequest
