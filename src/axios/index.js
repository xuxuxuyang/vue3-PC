import XYRequest from './request'
import { baseURL, Timeout } from './request/config'
import utils from '@/utils/localStorage'

const xyRequest = new XYRequest({
  baseURL: baseURL,
  timeout: Timeout,
  showloding: true, //实例默认所有请求都显示loding 不需要的在请求中单独设置 showloding为false即可
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = utils.get('token')
      config.headers.Authorization = `${token}` //每个请求都添加token请求头
      return config
    }
    // requestInterceptorCatch: (err) => {
    //   console.log('new出来的实例请求出错')
    //   return err
    // },
    // responseInterceptor: (response) => {
    //   console.log('new出来的实例响应拦截')
    //   return response
    // },
    // responseInterceptorCatch: (err) => {
    //   console.log('new出来的实例响应出错')
    //   return err
    // }
  }
})
export { xyRequest }

// const xyRequest2 = new XYRequest({
//   baseURL: baseURL,
//   timeout: Timeout,
//   showloding: true, //实例默认所有请求都显示loding 不需要的在请求中单独设置 showloding为false即可
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('请求拦截2')
//       return config
//     },
//     requestInterceptorCatch: (err) => {
//       return err
//     },
//     responseInterceptor: (response) => {
//       console.log('响应拦截2')

//       return response
//     },
//     responseInterceptorCatch: (err) => {
//       return err
//     }
//   }
// })
// export { xyRequest, xyRequest2 }
