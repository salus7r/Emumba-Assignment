import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

import { Flex, OverFlowSlide } from "@components/styled";
import { Wrapper, WeeklyContent } from "./styled";
import DailyCard from "./DailyCard";

const WeeklyWeather: FC = () => {
  const { locations, weather } = useSelector((state: RootState) => state.app);

  const { selected } = locations;
  const { result: WeatherData } = weather;

  return (
    <Wrapper>
      <div className={"mb-12"}>
        Weekly Forecast for <b>{selected?.name}</b>
      </div>
      <WeeklyContent>
        <OverFlowSlide>
          {WeatherData?.daily?.map((day, index) => (
            <DailyCard key={`${day.dt}_${index}`} dayData={day} />
          ))}
        </OverFlowSlide>
      </WeeklyContent>
    </Wrapper>
  );
};

export default WeeklyWeather;
