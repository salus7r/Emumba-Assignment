import React, { FC, useState } from "react";

import { EmumbaCard, FlexSpaceBetween } from "@components/styled";
import { Daily } from "apis/types";

interface IProps {
  dayData: Daily;
}

const DailyCard: FC<IProps> = ({ dayData }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <EmumbaCard $width={"20rem"}>
      <p>
        <b>Day/Date: </b>
        {new Date(dayData?.dt || "").toLocaleString()}
      </p>
      <FlexSpaceBetween>
        <div>
          <p>
            <b>Current Temperature: </b>
            {dayData?.temp?.day}
          </p>
          <p>
            <b>Condition: </b>
            {dayData?.weather?.[0]?.main}, {dayData?.weather?.[0]?.description}
          </p>
          <p>
            <b>High / Low Temperature: </b>
            {dayData?.temp?.max} / {dayData?.temp?.min}
          </p>
          {showMore && (
            <>
              <p>
                <b>Wind Speed: </b>
                {dayData?.wind_speed}
              </p>
              <p>
                <b>Humidity: </b>
                {dayData?.humidity}
              </p>
              <p>
                <b>Pressure: </b>
                {dayData?.pressure}
              </p>
              <p>
                <b>Sunrise/Sunset Time: </b>
                {new Date(dayData?.sunrise || "").toLocaleTimeString()} /{" "}
                {new Date(dayData?.sunset || "").toLocaleTimeString()}
              </p>
            </>
          )}
        </div>
        <div>
          <img
            width={"125px"}
            src={`https://openweathermap.org/img/wn/${dayData?.weather?.[0]?.icon}@2x.png`}
          />
        </div>
      </FlexSpaceBetween>
      <span className={"clickable"} onClick={() => setShowMore(!showMore)}>{`Show ${
        showMore ? "Less" : "More"
      }...`}</span>
    </EmumbaCard>
  );
};

export default DailyCard;
