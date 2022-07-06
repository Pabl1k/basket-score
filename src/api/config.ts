import axios from "axios";
import { API_KEY } from "./API_KEY";

/**
  idea!
  Create several account and change API_KEY if limit is reached
 */

export const API = async (endpoint: string) => {
  const validEndpoint = endpoint && !!endpoint;
  const _endpoint = validEndpoint ? endpoint.trim() : "";

  const config = {
    method: "get",
    url: `https://v1.basketball.api-sports.io/${_endpoint}`,
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "v1.basketball.api-sports.io",
    },
  };

  try {
    const response = await axios(config);
    return response.data.response;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
