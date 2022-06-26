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

type CurrentWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Current = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: CurrentWeather[];
};

type Minutely = {
  dt: number;
  precipitation: number;
};

type HourlyWeather = CurrentWeather;

type Hourly = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: HourlyWeather[];
  pop: number;
};

type DailyWeather = CurrentWeather;

type Daily = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: DailyWeather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};

type Alert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags?: string[];
};

export type Weather = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  hourly: Hourly[];
  daily: Daily[];
  alerts: Alert[];
};
