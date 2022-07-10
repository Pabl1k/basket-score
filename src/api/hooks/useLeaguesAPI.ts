import { useQuery } from "react-query";
import LeaguesAPI from "../requests/LeaguesAPI";
import { UseQueryResponse } from "../types";
import { LeagueParams, ILeaguesResponse } from "../requests/LeaguesAPI/types";

export const useFetchLeaguesAPIQuery = (
  params: LeagueParams
): UseQueryResponse<ILeaguesResponse> => {
  const { fetchLeagues } = LeaguesAPI(params);

  return useQuery("fetchLeagues", fetchLeagues);
};
