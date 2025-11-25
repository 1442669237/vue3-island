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
export function fetchRoutes(condition) {
  return request({
    url: `/api/shipHotel/fetchBoatTourByCondition`,
    method: 'post',
    data: condition,
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
