import { usePathCreator } from "../../../common/hooks";
import { API } from "../../config";
import { ITeams, TeamParams } from "./types";

const TeamsAPI = (params?: TeamParams): ITeams => {
  const path = usePathCreator("teams", params);

  return {
    fetchTeams: () => {
      return API(path);
    },
  };
};

export default TeamsAPI;
