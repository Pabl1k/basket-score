import { useQuery } from "react-query";
import { UseQueryResponse } from "../types/types";
import { ResponseType } from "../requests/StatusAPI/types";
import StatusAPI from "../requests/StatusAPI";

export const useFetchStatusAPIQuery = (): UseQueryResponse<ResponseType> => {
  return useQuery("fetchStatus", StatusAPI.fetchStatus);
};
