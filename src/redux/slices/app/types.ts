import { Location } from "apis/types";

export type AppReducerState = {
  locations: {
    loading: boolean;
    forceClose: boolean;
    error: string;
    results: Location[];
    selected?: Location;
  };
};

export type SelectLocationPayload = {
  location: Location;
};
