import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import RoomsList from '../RoomsList/RoomsList';
import Game from '../Game/Game';
import PreparingPage from '../PreparingPage/PreparingPage';
import LandingPage from '../LandingPage/LandingPage';
import ShipsProvider from '../../providers/shipsProvider';
import TopWrapper from '../../components/Molecules/TopWrapper/TopWrapper';
import Footer from '../../components/Molecules/Footer/Footer';
import GameProvider from '../../providers/gameProvider';
import MainPageWrapper from '../../components/Atoms/MainPageWrapper/MainPageWrapper';
import ErrorView from '../ErrorView/ErrorView';

const MainPage = () => {
  const { pathname } = useLocation();
  const { room, game, roomsList, error } = routes;
  if (pathname === '/main') return <LandingPage />;
  return (
    <MainPageWrapper pathname={pathname}>
      <GameProvider>
        <TopWrapper />
        {pathname === roomsList && <RoomsList />}
        <ShipsProvider>
          {pathname === room && <PreparingPage />}
          {pathname === game && <Game />}
          {pathname === error && <ErrorView />}
        </ShipsProvider>
      </GameProvider>
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;
