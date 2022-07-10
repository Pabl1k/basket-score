import { APICallResponse } from "../../types";

export type ISeasons = {
  fetchSeasons: () => APICallResponse<string | number[]>;
};
