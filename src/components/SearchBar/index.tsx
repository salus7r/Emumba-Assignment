import React, { FC, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "redux/store";
import { fetchLocations, forceOpen, resetLocations } from "redux/slices/app";
import { useDebounce } from "hooks";
import { EmumbaInput } from "@components/styled";
import { Wrapper } from "./styled";
import Options from "./Options";

const SearchBar: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { results, forceClose } = useSelector((state: RootState) => state.app.locations);

  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(fetchLocations(debouncedQuery));
    }

    return () => {
      resetLocations();
    };
  }, [debouncedQuery, dispatch]);

  const forceOpenOptions = useCallback(() => {
    if (forceClose && results.length > 0) {
      dispatch(forceOpen());
    }
  }, [dispatch, forceClose, results.length]);

  return (
    <Wrapper>
      <EmumbaInput
        autoFocus
        name="search"
        type="search"
        placeholder="Search Location..."
        onChange={(e) => setQuery(e.target.value)}
        onFocus={forceOpenOptions}
      />
      <Options />
    </Wrapper>
  );
};

export default SearchBar;
