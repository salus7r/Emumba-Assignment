export type AuthReducerState = {
  isLoggedIn: boolean;
  isLoading: boolean;
};

export type LoginActionPayload = {
  isLoggedIn: boolean;
};

export type LoadingActionPayload = {
  isLoading: boolean;
};
