import { Location, Weather } from "./types";

// API search function
export function searchLocation(
  search: string,
  type: "name" | "zip",
  limit: number,
): Promise<Location[]> {
  let query = `${process.env.REACT_APP_WEATHER_GEO_API}/${
    type === "name" ? "direct" : "zip"
  }?appid=${process.env.REACT_APP_WEATHER_GEO_API_KEY}`;

  switch (type) {
    case "name":
      query += `&limit=${limit}&q=${search}`;
      break;
    case "zip":
      query += `&zip=${search}`;
      break;
    default:
      break;
  }

  return fetch(query, {
    method: "GET",
  })
    .then((r) => r.json())
    .then((r) => (Array.isArray(r) ? r : [r]))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      throw new Error(err);
    });
}

// API get weather data function
export function getWeatherData(lat: number, lon: number): Promise<Weather> {
  return fetch(
    `${process.env.REACT_APP_WEATHER_API}?appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts`,
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
