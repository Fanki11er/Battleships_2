import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import ShipsProvider from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import Board from '../../components/Organisms/Board/Board';
import { useLocation } from 'react-router-dom';

const PreparingPage = () => {
  const { state } = useLocation();
  return (
    <DndProvider backend={HTML5Backend}>
      <ShipsProvider>
        <Board></Board>
        <ShipsList />
      </ShipsProvider>
    </DndProvider>
  );
};

export default PreparingPage;
