import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

import { FlexRow, FlexColumn, EmumbaCard } from "@components/styled";
import { CurrentWeather, Loader } from "@components/index";

const Content: FC = () => {
  const { loading } = useSelector((state: RootState) => state.app.weather);

  return (
    <>
      {loading ? (
        <EmumbaCard $height={"50vh"} $width={"auto"}>
          <Loader loading />
        </EmumbaCard>
      ) : (
        <FlexRow>
          <FlexColumn $width={"50%"}>
            <CurrentWeather />
          </FlexColumn>
          <FlexColumn $width={"50%"}>
            <CurrentWeather />
          </FlexColumn>
        </FlexRow>
      )}
    </>
  );
};

export default Content;
