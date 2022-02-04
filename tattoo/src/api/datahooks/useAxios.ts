/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import Axios from 'axios';
import { useAxiosResponse } from './useAxios.types';

export const useAxios = (): useAxiosResponse => {
  const renderInterceptors = () => {
    Axios.interceptors.request.use((axiosReqConfig) => {
      return axiosReqConfig;
    });

    Axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  };

  const renderAxiosDefaults = () => {
    Axios.defaults.baseURL = 'https://rest.bandsintown.com/';
    Axios.defaults.timeout = 1000 * 10;
  };

  const renderAxiosHeaders = () => {
    Axios.defaults.headers = {
      accept: 'application/json',
    };
  };

  useEffect(() => {
    if (!Axios.defaults.baseURL) {
      renderAxiosDefaults();
      renderAxiosHeaders();
      renderInterceptors();
      console.log('Initialize Axios');
    }
  }, []);

  const get = async <T>(url: string, params?: Record<any, any>) =>
    await Axios.get<T>(url, {
      params,
    });

  const post = async <T>(url: string, data?: Record<any, any>) => await Axios.post<T>(url, data);

  return { get, post };
};
