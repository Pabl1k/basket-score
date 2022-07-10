export type EventType = "league" | "cup";

export interface NameId {
  id?: number;
  name?: string;
}

export interface MainParams extends NameId {
  country_id?: number;
  country?: string;
  season?: string;
  search?: string;
}

/**
 * Response types
 */

export interface NameIdResponse {
  id: number;
  name: string;
}

export interface CountryTypeResponse extends NameId {
  code: string;
  flag: string;
}

export interface SeasonTypeResponse {
  season: string;
  start: string;
  end: string;
}

export interface TeamMainResponse extends NameIdResponse {
  logo: string | null;
}
