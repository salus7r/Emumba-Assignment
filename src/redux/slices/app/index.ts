import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { searchLocation, getWeatherData } from "apis";
import { AppReducerState, SelectLocationPayload } from "./types";

const initialState: AppReducerState = {
  locations: {
    loading: false,
    forceClose: false,
    error: "",
    results: [],
    selected: undefined,
  },
  weather: {
    loading: false,
    error: "",
    result: undefined,
  },
};

export const fetchLocations = createAsyncThunk(
  "geo/locations",
  async (args: { search: string; type: "name" | "zip" }, { rejectWithValue }) => {
    try {
      const { search, type } = args;

      const response = await searchLocation(search, type, 5);

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchWeatherData = createAsyncThunk(
  "weather/data",
  async (args: { lat: number; lon: number }, { rejectWithValue }) => {
    try {
      const { lat, lon } = args;

      const response = await getWeatherData(lat, lon);

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

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
    forceCloseDropdown: (state: AppReducerState, { payload }: PayloadAction<boolean>) => {
      state.locations.forceClose = payload;
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
    resetWeather: (state: AppReducerState) => {
      state.weather = {
        loading: false,
        error: "",
        result: undefined,
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
    builder.addCase(fetchLocations.rejected, (state, action) => {
      state.locations.loading = false;
      state.locations.error = action.error.message || "Something went wrong, please try again.";
      state.locations.results = [];
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, { payload }) => {
      state.weather.loading = false;
      state.weather.error = "";
      state.weather.result = payload;
    });
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.weather.loading = true;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.weather.loading = false;
      state.weather.error = action.error.message || "Something went wrong, please try again.";
      state.weather.result = undefined;
    });
  },
});

export const { selectLocation, forceCloseDropdown, resetLocations, resetWeather } =
  appSlice.actions;

export default appSlice.reducer;
