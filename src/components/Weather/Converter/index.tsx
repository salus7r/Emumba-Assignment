import React, { FC, useState } from "react";

import { EmumbaInput, FlexCenterBetween } from "@components/styled";
import { cToF, fToC } from "@utils/temperature";
import { Wrapper } from "../Current/styled";

const TemperatureConverter: FC = () => {
  const [isCtoF, setIsCtoF] = useState(true);
  const [cValue, setCValue] = useState(0);
  const [fValue, setFValue] = useState(0);

  return (
    <Wrapper>
      <div className={"mb-12"}>Temperature Converter</div>
      <FlexCenterBetween className={"mb-12"}>
        <EmumbaInput
          autoFocus
          name="Celsius"
          type="number"
          placeholder={"Celsius"}
          value={cValue}
          disabled={!isCtoF}
          onChange={(e) => {
            setCValue(+e.target.value);
            setFValue(cToF(+e.target.value));
          }}
        />
        <div style={{ width: "10rem", textAlign: "center" }}>{isCtoF ? "-->" : "<--"}</div>
        <EmumbaInput
          autoFocus
          name="Fahrenheit"
          type="number"
          placeholder={"Fahrenheit"}
          value={fValue}
          disabled={isCtoF}
          onChange={(e) => {
            setFValue(+e.target.value);
            setCValue(fToC(+e.target.value));
          }}
        />
      </FlexCenterBetween>
      <a
        href={"#"}
        onClick={() => {
          setIsCtoF(!isCtoF);
        }}
        style={{ width: "100%", marginTop: "1rem", textAlign: "center" }}
      >
        --- Switch ---
      </a>
    </Wrapper>
  );
};

export default TemperatureConverter;
