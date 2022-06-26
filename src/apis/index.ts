import { Location } from "./types";

// API search function
export function searchLocation(search: string, limit: number): Promise<Location[]> {
  return fetch(
    `${process.env.REACT_APP_WEATHER_GEO_API}?appid=${process.env.REACT_APP_WEATHER_API_KEY}&limit=${limit}&q=${search}`,
    {
      method: "GET",
    },
  )
    .then((r) => r.json())
    .then((r) => r)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      throw new Error(err);
    });
}

// API get weather data function
export function getWeatherData() {
  return [];
}
