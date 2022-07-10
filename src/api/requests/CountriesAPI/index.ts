import { API } from "../../config";
import { CountryParams, ICountries } from "./types";
import { usePathCreator } from "../../../common/hooks";

const CountriesAPI = (params?: CountryParams): ICountries => {
  const path = usePathCreator("countries", params);

  return {
    fetchCountries: () => {
      return API(path);
    },
  };
};

export default CountriesAPI;
