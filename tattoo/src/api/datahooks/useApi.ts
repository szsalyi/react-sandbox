import { AxiosError } from 'axios';
import { useState } from 'react';

import { useAxios } from './useAxios';
import { UseApiProps, UseApiObjectProps } from './useApi.types';

export const useApi: UseApiProps = <ResponseDTO>(hookParams?: UseApiObjectProps<ResponseDTO>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
  const [response, setResponse] = useState<ResponseDTO | undefined>();

  const { get, post } = useAxios();

  const getRequest = <T>(url: string, params?: T) => {
    setLoading(true);
    get<ResponseDTO>(url, params)
      .then((axiosResponse) => {
        setResponse(axiosResponse.data);
        if (hookParams && hookParams.onComplete) {
          hookParams.onComplete(axiosResponse.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        if (hookParams && hookParams.onError) {
          hookParams.onError(err);
        }

        setLoading(false);
      });
  };

  const postRequest = <T>(url: string, data?: T) => {
    setLoading(true);
    post<ResponseDTO>(url, data)
      .then((axiosResponse) => {
        setResponse(axiosResponse.data);
        if (hookParams && hookParams.onComplete) {
          hookParams.onComplete(axiosResponse.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        if (hookParams && hookParams.onError) {
          hookParams.onError(err);
        }

        setLoading(false);
      });
  };

  return [
    { getRequest, postRequest },
    { loading, data: response, error },
  ];
};
