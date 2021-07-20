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
import MainPage from './templates/MainPage/MainPage';
import SocketProvider from './providers/socketProvider';
import UserProvider from './providers/userProvider';

export const APP_VERSION = '0.01';
export const YEAR = '2021';

function App() {
  const { landingPage, mainPage } = routes;
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
              <Route path={'*'} component={LandingPage} />
            </Switch>
          </UserProvider>
        </SocketProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
