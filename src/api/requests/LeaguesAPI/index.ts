import { API } from "../../config";
import { ILeagues, LeagueParams } from "./types";
import { usePathCreator } from "../../../common/hooks";

const LeaguesAPI = (params?: LeagueParams): ILeagues => {
  const path = usePathCreator("leagues", params);

  return {
    fetchLeagues: () => {
      return API(path);
    },
  };
};

export default LeaguesAPI;
