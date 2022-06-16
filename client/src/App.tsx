import React from 'react';
//import { useEffect } from 'react';
//import axios from "axios";
//import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './router/routes';
import LandingPage from './Views/LandingPage/LandingPage';
import MainPage from './Views/MainPage/MainPage';
import SocketProvider from './providers/socketProvider';
import UserProvider from './providers/userProvider';
import ErrorView from './Views/ErrorView/ErrorView';

export const APP_VERSION = '1.0.0 (Beta)';
export const YEAR = '2022';

function App() {
  const { landingPage, mainPage, error } = routes;
  /*useEffect(() => {
    axios.get("http://localhost:8090").then(({ data }) => { 
      console.log(data);
    }); 
  }, []);*/

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <SocketProvider>
          <UserProvider>
            <Switch>
              <Route exact path={landingPage} component={LandingPage}></Route>
              <Route path={mainPage} component={MainPage}></Route>
              <Route path={error} component={ErrorView}></Route>
              <Route path={'*'} component={LandingPage} />
            </Switch>
          </UserProvider>
        </SocketProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
