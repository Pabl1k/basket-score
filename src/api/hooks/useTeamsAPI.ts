import { useQuery } from "react-query";
import TeamsAPI from "../requests/TeamsAPI";
import { ITeamsResponse, TeamParams } from "../requests/TeamsAPI/types";
import { UseQueryResponse } from "../types";

export const useFetchTeamsAPIQuery = (
  params?: TeamParams
): UseQueryResponse<ITeamsResponse> => {
  const { fetchTeams } = TeamsAPI(params);

  return useQuery("fetchTeams", fetchTeams);
};
