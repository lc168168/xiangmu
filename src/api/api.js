import request from '../utils/http'

// 使用qs库对post提交的数据进行格式化 ---- > qs需要安装   npm install qs --save
import qs from 'qs';

// get 模板
export function getJsonData(params) {
    return request({
      url: '/home.json',
      method: 'get',
      params
    })
  }

  export function getTodyData(params) {
    return request({
      url: '/pintuan.json',
      method: 'get',
      params
    })
  }

  export function getDetailData(params) {
    return request({
      url: '/goods.json',
      method: 'get',
      params
    })
  }



  