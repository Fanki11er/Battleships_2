import styled from '@emotion/styled';
import React, { PropsWithChildren, ReactNode } from 'react';
import { ReactComponent as GitHub } from '../../../assets/icons/icon-github.svg';
import { ReactComponent as LinkedIn } from '../../../assets/icons/icon-linkedin.svg';
import { ReactComponent as MyLogo } from '../../../assets/icons/icon-my-logo.svg';

type HrefProp = {
  goTo: string;
};

export const GithubIcon = styled(GitHub)`
  width: 100%;
  height: 100%;
`;
export const LinkedInIcon = styled(LinkedIn)`
  width: 100%;
  height: 100%;
`;
export const MyLogoIcon = styled(MyLogo)`
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  text-decoration: none;
  outline: none;
  &:hover,
  :focus {
    transform: scale(1.2) rotate(5deg);
    transition: transform 0.3s 0.1s;
    cursor: pointer;
  }
  @media screen and (min-width: 3000px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 1540px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const FooterDefaultIcon = (props: PropsWithChildren<ReactNode> & HrefProp) => {
  const { goTo } = props;

  return (
    <IconWrapper href={goTo} target={'_blank'}>
      {props.children}
    </IconWrapper>
  );
};
