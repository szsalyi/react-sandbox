import { AxiosResponse } from 'axios';

export interface useAxiosResponse {
  get: <T>(url: string, params?: Record<any, any> | undefined) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, data?: Record<any, any> | undefined) => Promise<AxiosResponse<T>>;
}
