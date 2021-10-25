import XYRequest from './request'
import { baseURL, Timeout } from './request/config'
const xyRequest = new XYRequest({
  basURL: baseURL,
  timeout: Timeout,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截1')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求出错1')
      return err
    },
    responseInterceptor: (response) => {
      console.log('响应拦截1')
      return response
    },
    responseInterceptorCatch: (err) => {
      console.log('响应出错1')
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
