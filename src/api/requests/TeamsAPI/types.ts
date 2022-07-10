import {
  APICallResponse,
  MainParams,
  CountryTypeResponse,
  TeamMainResponse,
} from "../../types";

export interface TeamParams extends MainParams {
  league?: number;
}

export interface ITeamsResponse extends TeamMainResponse {
  nationnal: boolean;
  country: CountryTypeResponse;
}

export interface ITeams {
  fetchTeams: () => APICallResponse<ITeamsResponse>;
}
