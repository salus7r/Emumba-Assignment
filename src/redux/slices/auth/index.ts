import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthReducerState, LoginActionPayload, LoadingActionPayload } from "./types";

const initialState: AuthReducerState = {
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state: AuthReducerState, action: PayloadAction<LoginActionPayload>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setLoading: (state: AuthReducerState, action: PayloadAction<LoadingActionPayload>) => {
      state.isLoading = action.payload.isLoading;
    },
    setLogout: (state: AuthReducerState) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoading, setLogout } = authSlice.actions;

export default authSlice.reducer;
