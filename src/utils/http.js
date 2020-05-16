// axios简单的封装

import axios from './request'

// 设置请求的baseUrl----基准请求路径
// let baseURL = "http://localhost:8080"
let baseURL = ''

let ajax = function(config) {

    config.url = baseURL + config.url

    return new Promise((resolve, reject)=>{

        var options = {
            method: config.method,  // get 或者 post
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json',
            },
            data: config.data
        }
            
        axios(config.url, options).then((res) => {
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

// 暴露方法  export    import {方法名} from 页面   多个export
// export default   import 方法名 from  页面   只能有一个export default

export default ajax;