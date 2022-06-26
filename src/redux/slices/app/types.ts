import { Location, Weather } from "apis/types";

export type AppReducerState = {
  locations: {
    loading: boolean;
    forceClose: boolean;
    error: string;
    results: Location[];
    selected?: Location;
  };
  weather: {
    loading: boolean;
    error: string;
    result?: Weather;
  };
};

export type SelectLocationPayload = {
  location: Location;
};
