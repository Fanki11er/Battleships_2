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
  @media screen and (max-width: 860px) {
    width: 150px;
  }
  @media screen and (max-width: 560px) {
    grid-row: 2/3;
  }
`;

const CancelButtonWrapper = () => {
  const { pathname } = useLocation();
  const { handlePreparationCancel } = useContext(GameContext);
  const { roomName } = useContext(UserContext);
  const { room, game, roomsList } = routes;

  const switchButton = (pathname: string) => {
    switch (pathname) {
      case room: {
        return (
          <CancelButton isActive onClick={() => handlePreparationCancel(roomName)}>
            Leave room
          </CancelButton>
        );
      }

      case game: {
        return (
          <CancelButton isActive onClick={() => handlePreparationCancel(roomName)}>
            Cancel game
          </CancelButton>
        );
      }

      case roomsList: {
        return (
          <CancelButton isActive onClick={() => console.log('Back')}>
            Back
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
