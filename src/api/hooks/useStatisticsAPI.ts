import { useQuery } from "react-query";
import StatisticsAPI from "../requests/StatisticsAPI";
import {
  IStatisticsResponse,
  StatisticsParams,
} from "../requests/StatisticsAPI/types";
import { UseQueryResponse } from "../types";

export const useFetchStatisticsAPIQuery = (
  params?: StatisticsParams
): UseQueryResponse<IStatisticsResponse> => {
  const { fetchStatistics } = StatisticsAPI(params);

  return useQuery("fetchStatistics", fetchStatistics);
};
