import axios, { AxiosRequestConfig } from 'axios'
import { Toast } from 'vant';
import 'vant/es/toast/style';

const instance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 3000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  if (response.data.code !== 0) {
    Toast.fail(response.data.message)
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const ret = await instance.request(config)
  return ret.data
}