import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'https://api.mall.aitrip123.com',
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
    // 统一返回 data，适配常见后端包装格式
    return response.data ?? response
  },
  (error) => {
    // 这里可以根据状态码做统一错误处理
    const status = error.response?.status
    console.warn('HTTP Error:', status, error.message)
    return Promise.reject(error)
  },
)

// 统一导出一个调用入口，便于后续切换真/假接口
export function request(config) {
  return http(config)
}

// 也导出实例，便于在特殊场景直接使用 axios
export { http }
