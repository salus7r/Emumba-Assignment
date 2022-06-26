import React, { FC, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "redux/store";
import { fetchLocations, forceCloseDropdown, resetLocations } from "redux/slices/app";
import { useDebounce, usePrevious } from "hooks";
import { EmumbaInput, EmumbaSelect, Flex } from "@components/styled";
import { Wrapper } from "./styled";
import Options from "./Options";

const SearchBar: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { results, forceClose } = useSelector((state: RootState) => state.app.locations);

  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"name" | "zip">("name");

  const prevSearchType = usePrevious(searchType);
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    if (debouncedQuery && prevSearchType === searchType) {
      dispatch(fetchLocations({ search: debouncedQuery, type: searchType }));
    }

    return () => {
      resetLocations();
    };
  }, [debouncedQuery, searchType, dispatch, prevSearchType]);

  const forceOpenOptions = useCallback(() => {
    if (forceClose && results.length > 0) {
      dispatch(forceCloseDropdown(false));
    }
  }, [dispatch, forceClose, results.length]);

  return (
    <Wrapper>
      <Flex>
        <EmumbaInput
          autoFocus
          name="search"
          type="search"
          value={query}
          placeholder={`Search by ${searchType} (i.e. ${
            searchType === "name" ? "London" : "90210"
          }...)`}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={forceOpenOptions}
        />
        <EmumbaSelect
          placeholder={"Select Type"}
          value={searchType}
          onChange={(e) => {
            setQuery("");
            dispatch(forceCloseDropdown(true));
            setSearchType(e.target.value as "name" | "zip");
          }}
        >
          <option value={"name"}>by Name</option>
          <option value={"zip"}>by Zip</option>
        </EmumbaSelect>
      </Flex>
      <Options />
    </Wrapper>
  );
};

export default SearchBar;
