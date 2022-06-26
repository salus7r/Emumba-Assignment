import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { searchLocation } from "apis";
import { AppReducerState, SelectLocationPayload } from "./types";

const initialState: AppReducerState = {
  locations: {
    loading: false,
    forceClose: false,
    error: "",
    results: [],
    selected: undefined,
  },
};

export const fetchLocations = createAsyncThunk("geo/locations", async (search: string) => {
  const response = await searchLocation(search, 5);

  return response;
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectLocation: (
      state: AppReducerState,
      { payload: { location } }: PayloadAction<SelectLocationPayload>,
    ) => {
      state.locations.selected = location;
      state.locations.forceClose = true;
    },
    forceOpen: (state: AppReducerState) => {
      state.locations.forceClose = false;
    },
    resetLocations: (state: AppReducerState) => {
      state.locations = {
        loading: false,
        forceClose: false,
        error: "",
        results: [],
        selected: undefined,
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLocations.fulfilled, (state, { payload }) => {
      state.locations.loading = false;
      state.locations.error = "";
      state.locations.results = payload;
    });
    builder.addCase(fetchLocations.pending, (state) => {
      state.locations.loading = true;
      state.locations.forceClose = false;
    });
    builder.addCase(fetchLocations.rejected, (state) => {
      state.locations.loading = false;
      state.locations.error = "Something went wrong, please try again.";
      state.locations.results = [];
    });
  },
});

export const { selectLocation, forceOpen, resetLocations } = appSlice.actions;

export default appSlice.reducer;
