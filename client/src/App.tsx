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
import axios from 'axios';

export const APP_VERSION = '1.0.5';
export const YEAR = '2022';
//export const URL = 'http://192.168.10.105:8090/';
//export const URL = 'http://192.168.1.103:8090/';
//export const URL = 'http://192.168.0.130:8090/';
export const URL = 'https://kdz-battleships-server.herokuapp.com/' || 'https//localhost:8090';
function App() {
  const { landingPage, mainPage, error } = routes;

  axios
    .get(`${URL}visit`)
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      //console.log(error);
    });

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
