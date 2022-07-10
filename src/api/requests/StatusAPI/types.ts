import { APICallResponse } from "../../types";

export interface IStatusResponse {
  account: {
    firstname: string;
    lastname: string;
    email: string;
  };
  subscription: {
    plan: string;
    end: string;
    active: boolean;
  };
  requests: {
    current: number;
    limit_day: number;
  };
}

export interface IStatus {
  fetchStatus: () => APICallResponse<IStatusResponse>;
}
