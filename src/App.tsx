import React from 'react';
//import { useEffect } from 'react';
//import axios from "axios";
//import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import Cell from './components/Atoms/Cell/Cell';
import Ship from './components/Atoms/Ship/Ship';
import Board from './components/Organisms/Board/Board';
import RoomsList from './Views/RoomsList/RoomsList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
        <Board></Board>
        <Ship />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
/**
  <Cell coordinates={{ x: 0, y: 0 }} />
          <Cell coordinates={{ x: 0, y: 1 }} />
          <Cell coordinates={{ x: 0, y: 2 }} />
          <Cell coordinates={{ x: 1, y: 0 }} />
          <Cell coordinates={{ x: 1, y: 1 }} />
          <Cell coordinates={{ x: 1, y: 2 }} />
          <Cell coordinates={{ x: 2, y: 0 }} />
          <Cell coordinates={{ x: 2, y: 1 }} />
          <Cell coordinates={{ x: 2, y: 2 }} />
 */
