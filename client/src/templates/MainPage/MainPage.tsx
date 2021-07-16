import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import RoomsList from '../../Views/RoomsList/RoomsList';
import Room from '../../components/Organisms/Room/Room';
import Game from '../../Views/Game/Game';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainPage = () => {
  const { pathname } = useLocation();
  const { mainPage, room, game } = routes;
  return (
    <Wrapper>
      {pathname === mainPage && <RoomsList />}
      {pathname === room && <Room />}
      {pathname === game && <Game />}
    </Wrapper>
  );
};

export default MainPage;
/*
 <Route path={'*'} component={MainTemplate} /> */
