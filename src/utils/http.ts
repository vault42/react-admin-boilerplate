import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

class Request {
  private instance: AxiosInstance
  baseConfig: AxiosRequestConfig = {
    baseURL: '/api',
    timeout: 60000,
    headers: {
      Authorization: ''
    }
  }

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        config.headers['Authorization'] = token
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code) {
          const data = res.data as ApiResponse<any>
          if (data.code !== 200) {
            console.warn('x')
          }
          return res
        }
        return res
      },
      (err: AxiosError) => {
        if (err.response) {
          const data = err.response.data as ApiResponse<any>
          switch (err.response.status) {
            case 400:
              console.error(data.message)
              break
            case 401:
              console.error(`当前操作没有权限！`)
              break
            case 403:
              console.warn(`当前没有权限访问，请重新登录！`)
              break
            case 500:
              console.error(`服务器内部错误！${data.message}`)
              break
            default:
              console.error('请求失败')
              break
          }
        }
        return Promise.reject(err.response)
      }
    )
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.delete(url, config)
  }

  public download<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config)
  }
}

export default new Request()
