import { useQuery } from "react-query";
import { UseQueryResponse } from "../types";
import { IStatusResponse } from "../requests/StatusAPI/types";
import StatusAPI from "../requests/StatusAPI";

export const useFetchStatusAPIQuery = (): UseQueryResponse<IStatusResponse> => {
  return useQuery("fetchStatus", StatusAPI.fetchStatus);
};
