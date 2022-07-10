import { API } from "../../config";
import { IStatus } from "./types";

const StatusAPI = (): IStatus => {
  return {
    fetchStatus: () => {
      return API("status");
    },
  };
};

export default StatusAPI();
