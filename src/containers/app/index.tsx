import React, { FC } from "react";
import { Provider } from "react-redux";

import store from "redux/store";
import Content from "@containers/content";
import { SearchBar } from "@components/index";

import GlobalStyle from "@theme/globalStyle";

import {
  AppContainer,
  AppMainLayout,
  AppHeading,
  AppBodyLayout,
  AppSearchBarWrapper,
  AppContentWrapper,
} from "./App.styled";

const App: FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <AppContainer className="App">
      <AppMainLayout>
        <AppHeading>The Weather App</AppHeading>
        <AppBodyLayout>
          <AppSearchBarWrapper>
            <SearchBar />
          </AppSearchBarWrapper>
          <AppContentWrapper>
            <Content />
          </AppContentWrapper>
        </AppBodyLayout>
      </AppMainLayout>
    </AppContainer>
  </Provider>
);

export default App;
