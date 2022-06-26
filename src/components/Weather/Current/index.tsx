import { FlexSpaceBetween } from "@components/styled";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";
import { Wrapper, CurrentContent } from "./styled";

const CurrentWeather: FC = () => {
  const { locations, weather } = useSelector((state: RootState) => state.app);

  const { selected } = locations;
  const { result: WeatherData } = weather;

  return selected ? (
    <Wrapper>
      <div className={"mb-12"}>
        Today’s Forecast for <b>{selected.name}</b>
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
              {WeatherData?.weather?.[0]?.description}
            </p>
            <p>
              <b>High / Low Temperature: </b>
              {WeatherData?.main?.temp_max} / {WeatherData?.main?.temp_min}
            </p>
          </div>
          <div>
            <img
              width={"125px"}
              src={`https://openweathermap.org/img/wn/${WeatherData?.weather?.[0]?.icon}@2x.png`}
            />
          </div>
        </FlexSpaceBetween>
      </CurrentContent>
    </Wrapper>
  ) : (
    <></>
  );
};

export default CurrentWeather;
