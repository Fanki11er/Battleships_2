import { useLocation } from 'react-router-dom';
import { lazy } from 'react';
import { routes } from '../../router/routes';
//import RoomsList from '../RoomsList/RoomsList';
//import Game from '../Game/Game';
//import PreparingPage from '../PreparingPage/PreparingPage';
import LandingPage from '../LandingPage/LandingPage';
import ShipsProvider from '../../providers/shipsProvider';
import TopWrapper from '../../components/Molecules/TopWrapper/TopWrapper';
import Footer from '../../components/Molecules/Footer/Footer';
import GameProvider from '../../providers/gameProvider';
import MainPageWrapper from '../../components/Atoms/MainPageWrapper/MainPageWrapper';
import { Suspense } from 'react';
import LoadingInfo from '../../components/Atoms/LoadingInfo/LoadingInfo';
const RoomsList = lazy(() => import('../RoomsList/RoomsList'));
const PreparingPage = lazy(() => import('../PreparingPage/PreparingPage'));
const Game = lazy(() => import('../Game/Game'));

const MainPage = () => {
  const { pathname } = useLocation();
  const { room, game, roomsList } = routes;
  if (pathname === '/main') return <LandingPage />;
  return (
    <MainPageWrapper pathname={pathname}>
      <GameProvider>
        <TopWrapper />
        <Suspense fallback={<LoadingInfo />}>
          {pathname === roomsList && <RoomsList />}
          <ShipsProvider>
            {pathname === room && <PreparingPage />}
            {pathname === game && <Game />}
          </ShipsProvider>
        </Suspense>
      </GameProvider>
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;
