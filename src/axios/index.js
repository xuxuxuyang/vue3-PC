import XYRequest from './request'
import { baseURL, Timeout } from './request/config'
const xyRequest = new XYRequest({
  basURL: baseURL,
  timeout: Timeout,
  showloding: true, //实例默认所有请求都显示loding 不需要的在请求中单独设置 showloding为false即可
  interceptors: {
    requestInterceptor: (config) => {
      console.log('new出来的实例请求拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('new出来的实例请求出错')
      return err
    },
    responseInterceptor: (response) => {
      console.log('new出来的实例响应拦截')
      return response
    },
    responseInterceptorCatch: (err) => {
      console.log('new出来的实例响应出错')
      return err
    }
  }
})
export { xyRequest }

// const xyRequest2 = new XYRequest({
//   basURL: baseURL,
//   timeout: Timeout,
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
