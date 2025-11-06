import { request } from '../utils/request'

// 获取岛屿详情
export function fetchIslandById(islandId) {
  return request({ url: `/api/island/queryIslandById?islandId=${islandId}`, method: 'get' })
}
// 获取岛屿酒店详情
export function fetchIslandHotel(islandId) {
  return request({ url: `/api/island/queryIslandHotelById?islandId=${islandId}`, method: 'get' })
}
// 获取岛屿美食详情
export function fetchIslandDine(islandId) {
  return request({ url: `/api/island/queryIslandDineById?islandId=${islandId}`, method: 'get' })
}
export function fetchIslandActivity(islandId) {
  return request({ url: `/api/island/queryIslandActivityById?islandId=${islandId}`, method: 'get' })
}
// 示例：提交表单（模拟接口）
// export function submitForm(data) {
//   return request({ url: '/buyer/goods/grouptour/search/v1/list', method: 'post', data })
// }

// 示例：获取列表（模拟接口）
// export function fetchList(params) {
//   return request({ url: '/list', method: 'get', params })
// }
