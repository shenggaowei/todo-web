import { AxiosRequestConfig } from "axios";
import request from "./axios";

interface IExtra {
}

interface IResponse<T> {
  code: number;
  data: T;
  message: string;
  extra: IExtra
}

export async function GET<R = any, P = any>(url: string, params?: P): Promise<R> {
    const config: AxiosRequestConfig = {
        url,
        method: 'get',
        params: params || {}
    }
    const ret = await request<IResponse<R>>(config)
    return ret.data
}

export async function POST<R = any, D = any>(url: string, data?: D): Promise<R> {
    const config: AxiosRequestConfig = {
        url,
        method: 'post',
        data: data || {}
    }
    const ret = await request<IResponse<R>>(config)
    return ret.data
}