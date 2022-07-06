import { APICallResponse } from "../../types/types";

export type SeasonsType = {
  fetchSeasons: () => APICallResponse<string | number[]>;
}
