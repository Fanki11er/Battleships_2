import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import ShipsProvider from '../../../providers/shipsProvider';
import ShipsList from '../../Molecules/ShipsList/ShipsList';
import Board from '../Board/Board';

const Room = () => (
  <DndProvider backend={HTML5Backend}>
    <ShipsProvider>
      <Board></Board>
      <ShipsList />
    </ShipsProvider>
  </DndProvider>
);

export default Room;
