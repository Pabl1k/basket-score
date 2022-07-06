import { UseQueryResult } from "react-query";
import { AxiosError } from "axios";

export type APICallResponse<T> = Promise<T>;

export type UseQueryResponse<T> = UseQueryResult<T, AxiosError>;

type CustomQueryKey<T> = (string | T | undefined)[];
export type UseQueryParams<T> = { queryKey: CustomQueryKey<T> };

type ParametersType = {
  [key: string]: string;
};

export type ResponseType = {
  [key: string]: any;
};

export type ServerResponseType = {
  errors: any[];
  get: string;
  parameters: ParametersType[];
  response: ResponseType[];
  results: number;
};
