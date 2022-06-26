export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  // eslint-disable-next-line camelcase
  local_names?: object;
};
