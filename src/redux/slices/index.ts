/**
 * This file imports all default reducers from slices and exports them as an object
 */

import appSlice from "./app";
import authSlice from "./auth";

const allReducers = {
  auth: authSlice,
  app: appSlice,
};

export default allReducers;
