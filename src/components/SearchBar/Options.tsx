import React, { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "redux/store";
import { fetchWeatherData, selectLocation } from "redux/slices/app";
import { Location } from "apis/types";
import { Option, SearchOptionsWrapper } from "./styled";
import { Loader } from "..";

const Options: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { results, error, loading, forceClose } = useSelector(
    (state: RootState) => state.app.locations,
  );

  const locationSelect = useCallback(
    (location: Location) => {
      dispatch(selectLocation({ location: location }));
      dispatch(fetchWeatherData({ lat: location.lat, lon: location.lon }));
    },
    [dispatch],
  );

  return (loading || results.length > 0) && !error && !forceClose ? (
    <SearchOptionsWrapper>
      <Loader loading={loading} />
      {!loading &&
        results.map((option, index) => (
          <Option
            $disabled={!!option.message}
            key={`${option.lat}_${option.lon}_${index}`}
            onClick={() => !option.message && locationSelect(option)}
          >
            {option.message || (
              <>
                <b>
                  {`${option.name}${option.state ? `, ${option.state}` : ""}, ${option.country} `}
                </b>
                ({option.lat}, {option.lon})
              </>
            )}
          </Option>
        ))}
      {error && <h4>{error}</h4>}
    </SearchOptionsWrapper>
  ) : (
    <></>
  );
};

export default Options;
