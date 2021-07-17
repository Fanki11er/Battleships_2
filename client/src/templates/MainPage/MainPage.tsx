import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import RoomsList from '../../Views/RoomsList/RoomsList';
import Game from '../../Views/Game/Game';
import PreparingPage from '../../Views/PreparingPage/PreparingPage';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  const { pathname } = useLocation();
  const { mainPage, room, game } = routes;
  return (
    <Wrapper>
      {pathname === mainPage && <RoomsList />}
      {pathname === room && <PreparingPage />}
      {pathname === game && <Game />}
    </Wrapper>
  );
};

export default MainPage;
