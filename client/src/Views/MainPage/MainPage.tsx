import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import RoomsList from '../RoomsList/RoomsList';
import Game from '../Game/Game';
import PreparingPage from '../PreparingPage/PreparingPage';
import LandingPage from '../LandingPage/LandingPage';
import ShipsProvider from '../../providers/shipsProvider';
import TopWrapper from '../../components/Molecules/TopWrapper/TopWrapper';
import Footer from '../../components/Molecules/Footer/Footer';
import { Wrapper } from './MainPage.styles';
import GameProvider from '../../providers/gameProvider';

const MainPage = () => {
  const { pathname } = useLocation();
  const { room, game, roomsList } = routes;
  if (pathname === '/main') return <LandingPage />;
  return (
    <Wrapper>
      <GameProvider>
        <TopWrapper />
        {pathname === roomsList && <RoomsList />}
        <ShipsProvider>
          {pathname === room && <PreparingPage />}
          {pathname === game && <Game />}
        </ShipsProvider>
      </GameProvider>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
