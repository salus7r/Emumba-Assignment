import { configureStore, combineReducers } from "@reduxjs/toolkit";
import allReducers from "./slices";

const rootReducer = combineReducers(allReducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.REACT_APP_NODE_ENV !== "pre" && process.env.REACT_APP_NODE_ENV !== "prod",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
