/**
 * Created by superman on 17/2/16.
 * http配置
 */
import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = ''
// axios.defaults.baseURL = 'http://localhost:8080/'
// axios.defaults.baseURL = 'https://api.baxiaobu.com/index.php/home/v5/'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.headers.Authorization = `token ${store.state.token}`
  //  console.log(config, '+++++++++++++++++++----------------')
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error.response, '===================')
    if (error.response) {
      switch (error.response.status) {
        case 404:
          // 404 清除token信息并跳转到登录页面
          localStorage.removeItem('mobile');
          window.location.href='/login'
        
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  },
)

export default axios
