import React, { FC } from "react";
import { Provider } from "react-redux";

import store from "redux/store";
import Header from "@components/header";
import Content from "@containers/content";

import GlobalStyle from "@theme/globalStyle";

import {
  AppContainer,
  AppMainLayout,
  AppSiderWrapper,
  AppBodyLayout,
  AppHeaderWrapper,
  AppContentWrapper,
} from "./App.styled";

const App: FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <AppContainer className="App">
      <AppMainLayout>
        <AppSiderWrapper>{/* <SideMenu /> */}</AppSiderWrapper>
        <AppBodyLayout>
          <AppHeaderWrapper>
            <Header />
          </AppHeaderWrapper>
          <AppContentWrapper>
            <Content />
          </AppContentWrapper>
        </AppBodyLayout>
      </AppMainLayout>
    </AppContainer>
  </Provider>
);

export default App;
