import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 1000,
  headers: {}
})

export default async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const ret =  await instance.request(config)
  return ret.data
}