import styled from 'styled-components';
import { APP_VERSION, YEAR } from '../../../App';
import { FooterDefaultIcon, GithubIcon, LinkedInIcon, MyLogoIcon } from '../../Atoms/FooterIcon/FooterIcon';
import VersionInfo from '../../Atoms/VersionInfo/VersionInfo';

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  align-items: center;
  justify-content: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  grid-column: 2/2;
`;

const Footer = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <FooterDefaultIcon>
          <LinkedInIcon />
        </FooterDefaultIcon>
        <FooterDefaultIcon>
          <GithubIcon />
        </FooterDefaultIcon>
        <FooterDefaultIcon>
          <MyLogoIcon />
        </FooterDefaultIcon>
      </IconsWrapper>
      <VersionInfo version={APP_VERSION} year={YEAR} />
    </Wrapper>
  );
};

export default Footer;
