import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import RoomsList from '../../Views/RoomsList/RoomsList';
import Game from '../../Views/Game/Game';
import PreparingPage from '../../Views/PreparingPage/PreparingPage';
import { useContext } from 'react';
import { UserContext } from '../../providers/userProvider';
import LandingPage from '../../Views/LandingPage/LandingPage';
import ShipsProvider from '../../providers/shipsProvider';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  const { pathname } = useLocation();
  const { room, game, roomsList } = routes;
  const { userName } = useContext(UserContext);
  if (pathname === '/main') return <LandingPage />;
  return (
    <Wrapper>
      {pathname === roomsList && <RoomsList userName={userName} />}
      <ShipsProvider>
        {pathname === room && <PreparingPage />}
        {pathname === game && <Game />}
      </ShipsProvider>
    </Wrapper>
  );
};

export default MainPage;
