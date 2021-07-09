import React from 'react';
//import { useEffect } from 'react';
//import axios from "axios";
//import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import RoomsList from './Views/RoomsList/RoomsList';

function App() {
  /*useEffect(() => {
    axios.get("http://localhost:8090").then(({ data }) => { 
      console.log(data);
    }); 
  }, []);*/

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoomsList />
    </ThemeProvider>
  );
}

export default App;
