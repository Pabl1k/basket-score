import { useQuery } from "react-query";
import SeasonsAPI from "../requests/SeasonsAPI";
import { UseQueryResponse } from "../types";

export const useFetchSeasonsQuery = (): UseQueryResponse<string[]> => {
  return useQuery("fetchSeasons", SeasonsAPI.fetchSeasons);
};
