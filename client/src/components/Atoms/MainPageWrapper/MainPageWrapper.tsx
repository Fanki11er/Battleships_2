import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import roomsListBackgroundImage from '../../../assets/backgrounds/rooms-list-background.svg';
import roomBackgroundImage from '../../../assets/backgrounds/preparing-background-image.svg';
import gameBackground from '../../../assets/backgrounds/game-background.svg';

import { routes } from '../../../router/routes';

const selectBackground = (pathname: string) => {
  const { roomsList, room, game } = routes;
  switch (pathname) {
    case roomsList: {
      return roomsListBackgroundImage;
    }
    case room: {
      return roomBackgroundImage;
    }
    case game: {
      return gameBackground;
    }
  }
};

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(${(props: Props) => selectBackground(props.pathname)});
  background-color: ${(props: StyledProps & Props) => props.theme.colors.darkBlue};
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: 50% 40%;
  background-attachment: fixed;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    justify-content: initial;
  }
`;
type Props = {
  pathname: string;
};
const MainPageWrapper = (props: PropsWithChildren<ReactNode> & Props) => {
  const { children, pathname } = props;
  return <Wrapper pathname={pathname}>{children}</Wrapper>;
};

export default MainPageWrapper;
