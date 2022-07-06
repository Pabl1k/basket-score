import { API } from "../../config";
import { SeasonsType } from "./types";

const SeasonsAPI = (): SeasonsType => {
  return {
    fetchSeasons: () => {
      return API("seasons");
    },
  };
};

export default SeasonsAPI();
