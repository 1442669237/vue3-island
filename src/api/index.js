import { request } from '../utils/request'

// 示例：获取欢迎信息（模拟接口）
export function fetchHello() {
  return request({ url: '/hello', method: 'get' })
}

// 示例：提交表单（模拟接口）
export function submitForm(data) {
  return request({ url: '/buyer/goods/grouptour/search/v1/list', method: 'post', data })
}

// 示例：获取列表（模拟接口）
export function fetchList(params) {
  return request({ url: '/list', method: 'get', params })
}
