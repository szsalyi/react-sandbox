import { AxiosError } from 'axios';

export interface UseApiMutations {
  getRequest: <T>(url: string, params?: T) => void;
  postRequest: <T>(url: string, data?: T) => void;
}

export interface UseApiObjectProps<ResponseDTO> {
  onComplete?: (res: ResponseDTO | undefined) => void;
  onError?: (err: AxiosError | undefined) => void;
}

export type UseApiProps = <ResponseDTO>(
  hookParams?: UseApiObjectProps<ResponseDTO>
) => UseApiResponse<ResponseDTO>;

export interface ResponseState<ResponseDTO> {
  loading: boolean;
  error?: AxiosError;
  data?: ResponseDTO;
}
export type UseApiResponse<ResponseDTO> = [UseApiMutations, ResponseState<ResponseDTO>];

export interface CreateRequestProps<T> {
  variables: T;
}
export type BaseRequest<T> = (details?: CreateRequestProps<T>) => void;

export type BaseRequestHook<ResponseDTO, T> = [BaseRequest<T>, ResponseState<ResponseDTO>];

export interface BaseHookRequest<ResponseDTO, T> {
  (params?: UseApiObjectProps<ResponseDTO>): BaseRequestHook<ResponseDTO, T>;
}
