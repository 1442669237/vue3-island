import axios from 'axios'

// 业务状态码常量
const BUSINESS_CODE = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  SERVER_ERROR: 500,
}

// 创建 axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://192.168.0.139:8082',
  timeout: 10000,
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 可在此注入鉴权信息
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    config.headers = config.headers || {}
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    const responseData = response.data
    let type = typeof responseData === 'object' || typeof responseData === 'array'
    // 检查是否为标准业务响应格式 { code, message, data }
    if (responseData && type && 'code' in responseData) {
      const { code, message, data } = responseData

      // 业务成功
      if (code === BUSINESS_CODE.SUCCESS) {
        return data
      }

      // 业务失败，抛出包含业务错误信息的错误
      const businessError = new Error(message || '业务处理失败')
      businessError.code = code
      businessError.type = 'BUSINESS_ERROR'
      console.warn('业务错误:', code, message)
      return Promise.reject(businessError)
    }

    // 兼容非标准格式，直接返回原始数据
    return responseData ?? response
  },
  (error) => {
    // HTTP 网络错误处理
    if (error.response) {
      // 服务器返回了错误状态码
      const status = error.response.status
      const statusText = error.response.statusText

      console.error('HTTP 错误:', status, statusText)

      // 根据状态码进行特殊处理
      switch (status) {
        case 401:
          console.warn('未授权访问，可能需要重新登录')
          break
        case 403:
          console.warn('权限不足，访问被拒绝')
          break
        case 404:
          console.warn('请求的资源不存在')
          break
        case 500:
          console.warn('服务器内部错误')
          break
        default:
          console.warn(`HTTP 错误: ${status} ${statusText}`)
      }

      // 创建统一的HTTP错误对象
      const httpError = new Error(`HTTP ${status}: ${statusText}`)
      httpError.status = status
      httpError.type = 'HTTP_ERROR'
      return Promise.reject(httpError)
    } else if (error.request) {
      // 网络连接错误
      console.error('网络连接错误:', error.message)
      const networkError = new Error('网络连接失败，请检查网络设置')
      networkError.type = 'NETWORK_ERROR'
      return Promise.reject(networkError)
    } else {
      // 其他错误
      console.error('请求配置错误:', error.message)
      return Promise.reject(error)
    }
  },
)

// 统一导出一个调用入口，便于后续切换真/假接口
export function request(config) {
  return http(config)
}

// 也导出实例，便于在特殊场景直接使用 axios
export { http }
