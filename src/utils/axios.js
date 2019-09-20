import axios from 'axios'
import Qs from 'qs'
// import {
//   getCookie
// } from '@/utils/cookie'

import store from '../store/index'

// axios.defaults.headers.common['token'] = localstorage.getItem('token'); //设置请求头，这个是不是必须的

export default function(path, params, method = 'get', headerType = "json") {
  axios.defaults.withCredentials = true; //是否携带cookie
  axios.defaults.crossDomain = true; //false  不跨域  true 跨域
  // http://www.lh.com:2000/
  axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '/api' : '/apis'
  //设置请求头
  let headers = {},
    data = ''
  if (method == "post") {
    if (headerType == "json") { //参数是json类型
      headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8'
      }
      data = params;
    } else { //参数是字符串类型
      headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
      data = Qs.stringify(params)
    }
  }



  //当出现某些情况的时候设置请求拦截
  axios.interceptors.response.use(response => {
    // if (response.data.statusCode == 20009) { //这里的状态码是根据后台设置的来
    //   Message.error({
    //     message: '登录过期，请重新登录'
    //   })
    // }

    // store.commit('changeStatus', 200)

    if (response.status == 200) {
      store.commit('getCode', 200)
    }
    return response;
  }, error => {
    if (error.response.status == 401) {
      store.commit('getCode', 401)
    }
    // else {
    //         store.commit('changeStatus', 200)
    //       }
    return Promise.resolve(error.response.status)
  })


  //发送请求
  return new Promise((resolve, reject) => {
    axios({
      url: path,
      method,
      // type,
      data: data,
      timeout: 6000,
      headers: headers
    }).then(result => {
      resolve(result)
    }).catch(err => {
      reject(err)
    })
  })
}
