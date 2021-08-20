import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import backgroundImage from '../../../assets/Images/rooms-list-background.svg';

import { routes } from '../../../router/routes';

const selectBackground = (pathname: string) => {
  const { roomsList } = routes;
  switch (pathname) {
    case roomsList: {
      return backgroundImage;
    }
  }
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(${(props: Props) => selectBackground(props.pathname)});
  background-color: ${(props: StyledProps & Props) => props.theme.colors.darkBlue};
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: 0 40%;
  background-attachment: fixed;
`;
type Props = {
  pathname: string;
};
const MainPageWrapper = (props: PropsWithChildren<ReactNode> & Props) => {
  const { children, pathname } = props;
  return <Wrapper pathname={pathname}>{children}</Wrapper>;
};

export default MainPageWrapper;
