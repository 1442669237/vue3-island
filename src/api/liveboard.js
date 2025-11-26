import { request } from '../utils/request'

// 获取查询可选日期列表
export function fetchAvailableDates() {
  return request({ url: `/api/shipHotel/getAllTourDate`, method: 'get' })
}
// 获取可选国家列表
export function fetchCountries() {
  return request({ url: `/api/shipHotel/getAllCountry`, method: 'get' })
}
// 查询符合条件路线
export function fetchRoutes(params) {
  return request({
    url: `/api/shipHotel/queryPage`,
    method: 'get',
    params,
  })
}
// 获取热门船
export function fetchHotBoats() {
  return request({
    url: `/api/shipHotel/getHotBoats`,
    method: 'get',
  })
}
// 获取行程详情
export function fetchTripDetails(condition) {
  return request({
    url: `/api/shipHotel/fetchTours`,
    method: 'post',
    data: condition,
  })
}
