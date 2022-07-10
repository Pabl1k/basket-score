import { useQuery } from "react-query";
import { CountryParams } from "../requests/CountriesAPI/types";
import { CountryTypeResponse, UseQueryResponse } from "../types";
import CountriesAPI from "../requests/CountriesAPI";

export const useFetchCountriesAPIQuery = (
  params: CountryParams
): UseQueryResponse<CountryTypeResponse> => {
  const { fetchCountries } = CountriesAPI(params);

  return useQuery("fetchCountries", fetchCountries);
};
