import { request } from '../utils/request'

export function getBoatDetailById(params){
  return request({ url: '/api/shipHotel/getBoatTours', method: 'get', params })
}


