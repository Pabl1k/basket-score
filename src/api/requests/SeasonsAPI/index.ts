import { API } from "../../config";
import { ISeasons } from "./types";

const SeasonsAPI = (): ISeasons => {
  return {
    fetchSeasons: () => {
      return API("seasons");
    },
  };
};

export default SeasonsAPI();
