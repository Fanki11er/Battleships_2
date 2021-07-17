import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import ShipsProvider from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import Board from '../../components/Organisms/Board/Board';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import { useEffect } from 'react';

const PreparingPage = () => {
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const test = state as any;
  const { roomName } = test;

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {});
  }, [socket, roomName]);

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
