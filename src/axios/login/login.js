import { xyRequest } from '../index'

const gettoken = async function (payload) {
  const { token, id } = await xyRequest.request({
    url: '/login',
    method: 'post',
    data: payload,
    interceptors: {
      responseInterceptor: (response) => {
        return response.data
      }
    }
  })
  return { token, id }
}

const getuserdata = async function (payload) {
  const res = await xyRequest.request({
    url: `/users/${payload}`,
    // method: 'post',
    interceptors: {
      responseInterceptor: (response) => {
        return response.data
      }
    }
  })
  return res
}
export { gettoken, getuserdata }
