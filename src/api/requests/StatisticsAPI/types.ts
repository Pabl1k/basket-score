import {
  APICallResponse,
  EventType,
  NameIdResponse,
  TeamMainResponse,
} from "../../types";

export interface StatisticsParams {
  league: number;
  season: string;
  team: number;
  date?: string;
}

/**
 * Response types
 */

interface ILeagueResponse extends TeamMainResponse {
  type: EventType;
  season: string;
}

interface ICountryResponse extends NameIdResponse {
  code: string;
  flag: string;
}

// Games response
interface ResultResponse {
  total: number;
  percentage: string;
}

interface GamesStatType<T> {
  home: T;
  away: T;
  all: T;
}

interface IGamesResponse {
  played: GamesStatType<number>;
  wins: GamesStatType<ResultResponse>;
  draws: GamesStatType<ResultResponse>;
  loses: GamesStatType<ResultResponse>;
}

// Points response
interface ForAgainst {
  total: GamesStatType<number>;
  average: GamesStatType<string>;
}

interface IPointsResponse {
  for: ForAgainst;
  against: ForAgainst;
}

export interface IStatisticsResponse {
  league: ILeagueResponse;
  country: ICountryResponse;
  team: TeamMainResponse;
  games: IGamesResponse;
  points: IPointsResponse;
}

export interface IStatistics {
  fetchStatistics: () => APICallResponse<IStatisticsResponse>;
}
