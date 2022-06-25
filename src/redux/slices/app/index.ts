import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppReducerState, ShowSideBarPayload } from "./types";

const initialState: AppReducerState = {
  showSideBar: false,
};

const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShowSideBar: (state: AppReducerState, action: PayloadAction<ShowSideBarPayload>) => {
      state.showSideBar = action.payload.showSideBar;
    },
  },
});

export const { setShowSideBar } = appSlice.actions;

export default appSlice.reducer;
