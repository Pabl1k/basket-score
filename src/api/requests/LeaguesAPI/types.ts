import {
  APICallResponse,
  CountryTypeResponse,
  EventType,
  MainParams,
  SeasonTypeResponse, NameId
} from "../../types";

/**
 * Parameters types
 */

export interface LeagueParams extends MainParams {
  type?: EventType;
  code?: string;
}

/**
 * Response types
 */

export interface ILeaguesResponse extends NameId {
  type: EventType;
  logo: null | string;
  country: CountryTypeResponse;
  seasons: SeasonTypeResponse[];
}

export interface ILeagues {
  fetchLeagues: () => APICallResponse<ILeaguesResponse>;
}
