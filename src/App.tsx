import React from 'react';
//import { useEffect } from 'react';
//import axios from "axios";
//import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import Board from './components/Organisms/Board/Board';
//import RoomsList from './Views/RoomsList/RoomsList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ShipsList from './components/Molecules/ShipsList/ShipsList';
import ShipsProvider from './providers/shipsProvider';

function App() {
  /*useEffect(() => {
    axios.get("http://localhost:8090").then(({ data }) => { 
      console.log(data);
    }); 
  }, []);*/

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DndProvider backend={HTML5Backend}>
        <ShipsProvider>
          <Board></Board>
          <ShipsList />
        </ShipsProvider>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
