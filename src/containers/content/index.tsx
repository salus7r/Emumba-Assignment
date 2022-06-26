import React, { FC } from "react";
import { FlexRow, FlexColumn } from "@components/styled";

const Content: FC = () => (
  <FlexRow>
    <FlexColumn>
      <div>
        <div>Today’s Forecast for </div>
      </div>
    </FlexColumn>
    <FlexColumn></FlexColumn>
  </FlexRow>
);

export default Content;
