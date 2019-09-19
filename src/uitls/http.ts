import axios from 'axios'
import { Loading, Notification } from 'element-ui'
import { MyLoading } from './loading'

export const service = axios.create({
  baseURL: process.env.VUE_APP_API_PATH + process.env.VUE_APP_BASE_API_PATH,
  timeout: 20000
})
window.console.log(process.env.VUE_APP_API_PATH)
const myLoading = new MyLoading(0)
let loading: any = null
interface IUserInfo {
  name: string
  password: string
}
// 拦截器
service.interceptors.request.use(
  config => {
    window.console.log(config)
    if (window.location.href.indexOf('login') < 0) {
      const storage = localStorage.getItem('user')
      const userInfo: any = storage && JSON.parse(storage)
      if (!userInfo || (userInfo && !userInfo.name)) {
        window.location.href = 'http://127.0.0.1:3000'
      }
    }
    myLoading.add()
    loading = Loading.service({ fullscreen: true })
    return config
  },
  error => {
    window.console.log(error)
  }
)
service.interceptors.response.use(
  response => {
    myLoading.minus()
    if (myLoading.num === 0) {
      loading.close()
    }
    if (response.status !== 200) {
      Notification.error({
        title: '错误',
        message: response.data.message
      })
    }
    return response
  },
  error => {
    window.console.log(error)
  }
)

export const get = (
  url: string,
  param: object,
  callback: (res: object) => void
) => {
  service
    .get(url, { params: param })
    .then(res => {
      callback(res.data)
    })
    .catch(error => {
      window.console.log(error)
    })
}
export const post = (
  url: string,
  param: object,
  callback: (res: object) => void
) => {
  service
    .post(url, param)
    .then(res => {
      callback(res.data)
    })
    .catch(error => {
      window.console.log(error)
    })
}
