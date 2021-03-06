import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { GameContext } from '../../../providers/gameProvider';
import { UserContext } from '../../../providers/userProvider';
import { routes } from '../../../router/routes';
import { CancelButton, CancelLink } from '../Buttons/Buttons';

const Wrapper = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: 150px;
  }
  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-row: 2/3;
    grid-column: 2/3;
  }
`;

const CancelButtonWrapper = () => {
  const { pathname } = useLocation();
  const { handlePreparationCancel } = useContext(GameContext);
  const { roomName, handleSetUserName } = useContext(UserContext);
  const { room, game, roomsList, error } = routes;

  const switchButton = (pathname: string) => {
    switch (pathname) {
      case room: {
        return (
          <CancelButton isActive onClick={() => handlePreparationCancel(roomName)} title={'Exit from this room'}>
            Leave room
          </CancelButton>
        );
      }

      case game: {
        return (
          <CancelButton isActive onClick={() => handlePreparationCancel(roomName)} title={'Leave the current game'}>
            Cancel
          </CancelButton>
        );
      }

      case roomsList: {
        return (
          <CancelLink to={''} onClick={() => handleSetUserName('')} title={'Return to landing page'}>
            Back
          </CancelLink>
        );
      }
      case error: {
        return (
          <CancelLink to={''} onClick={() => handleSetUserName('')} title={'Return to landing page'}>
            Back
          </CancelLink>
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
