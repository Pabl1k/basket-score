import { usePathCreator } from "../../../common/hooks";
import { IStatistics, StatisticsParams } from "./types";
import { API } from "../../config";

const StatisticsAPI = (params?: StatisticsParams): IStatistics => {
  const path = usePathCreator("statistics", params);

  return {
    fetchStatistics: () => {
      return API(path);
    },
  };
};

export default StatisticsAPI;
