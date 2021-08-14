import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GameContext } from '../../../providers/gameProvider';
import { UserContext } from '../../../providers/userProvider';
import { routes } from '../../../router/routes';
import { CancelButton } from '../Buttons/Buttons';

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CancelButtonWrapper = () => {
  const { pathname } = useLocation();
  const { handlePreparationCancel } = useContext(GameContext);
  const { roomName } = useContext(UserContext);
  const { room } = routes;

  const switchButton = (pathname: string) => {
    switch (pathname) {
      case room: {
        return (
          <CancelButton isActive onClick={() => handlePreparationCancel(roomName)}>
            Leave room
          </CancelButton>
        );
      }
      default: {
        return null;
      }
    }
  };
  return <Wrapper>{switchButton(pathname)}</Wrapper>;
};

export default CancelButtonWrapper;
