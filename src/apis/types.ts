/* eslint-disable camelcase */
export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  // eslint-disable-next-line camelcase
  local_names?: object;
  cod?: number;
  message?: string;
};

export type CurrentWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: CurrentWeather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
