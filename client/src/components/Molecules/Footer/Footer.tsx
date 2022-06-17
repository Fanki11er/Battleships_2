import styled from 'styled-components';
import { APP_VERSION, YEAR } from '../../../App';
import { FooterDefaultIcon, GithubIcon, LinkedInIcon, MyLogoIcon } from '../../Atoms/FooterIcon/FooterIcon';
import VersionInfo from '../../Atoms/VersionInfo/VersionInfo';

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  @media screen and (min-width: 3000px) {
    height: 180px;
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 30% 40% 30%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 60% 40%;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  justify-self: center;
  align-self: center;
  grid-column: 2/2;

  @media screen and (min-width: 3000px) {
    width: 500px;
  }
  @media screen and (max-width: 860px) {
    width: 270px;
  }
  @media screen and (max-width: 600px) {
    grid-column: 1/2;
    width: 190px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <FooterDefaultIcon goTo={'https://www.linkedin.com/in/dziedzic-k/'}>
          <LinkedInIcon />
        </FooterDefaultIcon>
        <FooterDefaultIcon goTo={'https://github.com/Fanki11er'}>
          <GithubIcon />
        </FooterDefaultIcon>
        <FooterDefaultIcon goTo={'https://dziedzic-about-me.firebaseapp.com/?utm_source=Battleships'}>
          <MyLogoIcon />
        </FooterDefaultIcon>
      </IconsWrapper>
      <VersionInfo version={APP_VERSION} year={YEAR} />
    </Wrapper>
  );
};

export default Footer;
