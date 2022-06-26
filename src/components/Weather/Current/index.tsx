import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

import { FlexSpaceBetween } from "@components/styled";
import { Wrapper, CurrentContent } from "./styled";

const CurrentWeather: FC = () => {
  const { locations, weather } = useSelector((state: RootState) => state.app);

  const [showMore, setShowMore] = useState(false);

  const { selected } = locations;
  const { result: WeatherData } = weather;

  return (
    <Wrapper>
      <div className={"mb-12"}>
        Today’s Forecast for <b>{selected?.name}</b>
      </div>
      <CurrentContent>
        <FlexSpaceBetween>
          <div>
            <p>
              <b>Current Temperature: </b>
              {WeatherData?.current?.temp}
            </p>
            <p>
              <b>Weather Condition: </b>
              {WeatherData?.current?.weather?.[0]?.main},{" "}
              {WeatherData?.current?.weather?.[0]?.description}
            </p>
            <p>
              <b>High / Low Temperature: </b>
              {WeatherData?.current?.feels_like} / {WeatherData?.current?.dew_point}
            </p>
            {showMore && (
              <>
                <p>
                  <b>Wind Speed: </b>
                  {WeatherData?.current?.wind_speed}
                </p>
                <p>
                  <b>Humidity: </b>
                  {WeatherData?.current?.humidity}
                </p>
                <p>
                  <b>Pressure: </b>
                  {WeatherData?.current?.pressure}
                </p>
                <p>
                  <b>Sunrise/Sunset Time: </b>
                  {new Date(WeatherData?.current?.sunrise || "").toLocaleTimeString()} /{" "}
                  {new Date(WeatherData?.current?.sunset || "").toLocaleTimeString()}
                </p>
              </>
            )}
          </div>
          <div>
            <img
              width={"125px"}
              src={`https://openweathermap.org/img/wn/${WeatherData?.current?.weather?.[0]?.icon}@2x.png`}
            />
          </div>
        </FlexSpaceBetween>
        <span className={"clickable"} onClick={() => setShowMore(!showMore)}>{`Show ${
          showMore ? "Less" : "More"
        }...`}</span>
      </CurrentContent>
    </Wrapper>
  );
};

export default CurrentWeather;
