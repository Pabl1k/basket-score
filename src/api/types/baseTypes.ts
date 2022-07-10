import { QueryKey, UseQueryOptions, UseQueryResult } from "react-query";
import { AxiosError } from "axios";

export type APICallResponse<T> = Promise<T>;

export type UseQueryResponse<T> = UseQueryResult<T, AxiosError>;

export type UseQueryCustomOptions<T, K extends QueryKey = QueryKey> =
  | Omit<UseQueryOptions<T, AxiosError, T, K>, "queryFn">
  | Omit<UseQueryOptions<T, AxiosError, T, K>, "queryFn" | "queryKey">;

type CustomQueryKey<T> = (string | T | undefined)[];
export type QueryParams<T> = { queryKey: CustomQueryKey<T> };
