import axios from 'axios'
import { ElLoading } from 'element-plus'
class XYRequest {
  constructor(config) {
    // 添加实例私人的拦截器
    this.instance = axios.create(config) //创建axios的实例
    this.interceptors = config.interceptors
    this.showloding = config.showloding || false
    //new出来实例的私人拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
    // 全局请求拦截器 每个new出来的实例都会走一遍这里
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showloding) {
          ElLoading.service({
            text: '正在加载中...'
          })
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
    // 全局响应拦截器 每个new出来的实例都会走一遍这里
    this.instance.interceptors.response.use(
      (response) => {
        if (this.loding) {
          this.loding.close() //关闭loding
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
      //new出来的实例中 每个请求的私人拦截器
      if (config.interceptors) {
        if (config.interceptors.requestInterceptor) {
          //如果config中传了拦截器就走一遍这里 处理完成再返回config
          config = config.interceptors.requestInterceptor(config)
        }
      }
      //判断是否需要显示loding
      if (config.showloding === false) {
        this.showloding = false
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors) {
            if (config.interceptors.responseInterceptor) {
              res = config.interceptors.responseInterceptor(res)
            }
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
