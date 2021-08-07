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
import { Wrapper } from './MainPage.styles';
import GameProvider from '../../providers/gameProvider';

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
        <GameProvider>
          {pathname === room && <PreparingPage />}
          {pathname === game && <Game />}
        </GameProvider>
      </ShipsProvider>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
