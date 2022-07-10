import { APICallResponse, NameId, CountryTypeResponse } from "../../types";

export interface CountryParams extends NameId {
  code?: string;
  search?: string;
}

export interface ICountries {
  fetchCountries: () => APICallResponse<CountryTypeResponse>;
}
