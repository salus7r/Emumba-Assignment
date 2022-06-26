import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

import { FlexRow, FlexColumn, EmumbaCard } from "@components/styled";
import { CurrentWeather, TemperatureConverter, Loader } from "@components/index";

const Content: FC = () => {
  const { locations, weather } = useSelector((state: RootState) => state.app);

  const { selected } = locations;
  const { loading } = weather;

  return (
    <>
      {loading ? (
        <EmumbaCard $height={"50vh"} $width={"auto"}>
          <Loader loading />
        </EmumbaCard>
      ) : (
        <FlexRow>
          {selected ? (
            <>
              <FlexColumn $width={"50%"}>
                <CurrentWeather />
              </FlexColumn>
              <FlexColumn $width={"50%"}>
                <TemperatureConverter />
              </FlexColumn>
            </>
          ) : (
            <></>
          )}
        </FlexRow>
      )}
    </>
  );
};

export default Content;
