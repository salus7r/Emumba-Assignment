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
              {WeatherData?.main?.temp}
            </p>
            <p>
              <b>Weather Condition: </b>
              {WeatherData?.weather?.[0]?.main}, {WeatherData?.weather?.[0]?.description}
            </p>
            <p>
              <b>High / Low Temperature: </b>
              {WeatherData?.main?.temp_max} / {WeatherData?.main?.temp_min}
            </p>
            {showMore && (
              <>
                <p>
                  <b>Wind Speed: </b>
                  {WeatherData?.wind?.speed}
                </p>
                <p>
                  <b>Humidity: </b>
                  {WeatherData?.main?.humidity}
                </p>
                <p>
                  <b>Pressure: </b>
                  {WeatherData?.main?.pressure}
                </p>
                <p>
                  <b>Sunrise/Sunset Time: </b>
                  {new Date(WeatherData?.sys?.sunrise || "").toLocaleTimeString()} /{" "}
                  {new Date(WeatherData?.sys?.sunset || "").toLocaleTimeString()}
                </p>
              </>
            )}
          </div>
          <div>
            <img
              width={"125px"}
              src={`https://openweathermap.org/img/wn/${WeatherData?.weather?.[0]?.icon}@2x.png`}
            />
          </div>
        </FlexSpaceBetween>
        <a href={"#"} onClick={() => setShowMore(!showMore)}>{`Show ${
          showMore ? "Less" : "More"
        }...`}</a>
      </CurrentContent>
    </Wrapper>
  );
};

export default CurrentWeather;
