import { API } from "../../config";
import { StatusType } from "./types";

const StatusAPI = (): StatusType => {
  return {
    fetchStatus: () => {
      return API("status");
    },
  };
};

export default StatusAPI();
