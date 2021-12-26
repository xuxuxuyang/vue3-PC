import axios from 'axios'
import { ElLoading } from 'element-plus'

//定义一个类  可以用来创建多个axios的实例
class XYRequest {
  constructor(config) {
    // 添加实例私人的拦截器
    this.instance = axios.create(config) //创建axios的实例
    this.interceptors = config.interceptors //保存传过来的拦截器配置对象
    this.showloding = config.showloding || false

    //实例的大拦截器  new出来axios实例的有拦截器方法
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor, //在axios实例的拦截器里面调用自己传的拦截器函数
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )

    //全局的总拦截器 每个new出来的实例都会走一遍这里
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
        // console.log('全局请求拦截')
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
        if (this.loding || false) {
          this.loding.close() //关闭loding
        }
        // console.log('全局响应拦截')
        return response.data
      },
      (error) => {
        if (this.loding || false) {
          this.loding.close()
        }
        console.log('全局响应错误')
        return Promise.reject(error)
      }
    )
  }

  //发请求的时候调用的request方法
  request(config) {
    return new Promise((resolve, reject) => {
      //如果传了interceptors这个配置对象
      if (config.interceptors) {
        //再处理配置对象里的拦截器方法
        if (config.interceptors.requestInterceptor) {
          //拦截器里一般就处理config参数，传给它处理处理完了再返回即可
          config = config.interceptors.requestInterceptor(config) //此函数会return处理完的config
        }
      }
      //判断是否需要显示loding
      if (config.showloding === false) {
        console.log('我不需要loding')
        this.showloding = false
      }
      //真正发起请求
      this.instance
        .request(config) //这里的config是被所有的请求拦截器处理完的
        .then((res) => {
          if (config.interceptors) {
            //这里再看看要不要对响应做处理
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
