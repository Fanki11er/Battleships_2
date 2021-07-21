import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import RoomsList from '../RoomsList/RoomsList';
import Game from '../Game/Game';
import PreparingPage from '../PreparingPage/PreparingPage';
import { useContext } from 'react';
import { UserContext } from '../../providers/userProvider';
import LandingPage from '../LandingPage/LandingPage';
import ShipsProvider from '../../providers/shipsProvider';
import TopWrapper from '../../components/Molecules/TopWrapper/TopWrapper';
import Footer from '../../components/Molecules/Footer/Footer';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  const { pathname } = useLocation();
  const { room, game, roomsList } = routes;
  const { userName } = useContext(UserContext);
  if (pathname === '/main') return <LandingPage />;
  return (
    <Wrapper>
      <TopWrapper />
      {pathname === roomsList && <RoomsList userName={userName} />}
      <ShipsProvider>
        {pathname === room && <PreparingPage />}
        {pathname === game && <Game />}
      </ShipsProvider>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
