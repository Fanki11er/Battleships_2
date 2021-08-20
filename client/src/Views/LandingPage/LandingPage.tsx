import styled from 'styled-components';

import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserNameForm from '../../components/Organisms/UserNameForm/UserNameForm';
import { UserContext } from '../../providers/userProvider';
import { routes } from '../../router/routes';
import backgroundImage from '../../assets/Images/landing-page-background.svg';
import { StyledProps } from '../../assets/styles/theme';
import Footer from '../../components/Molecules/Footer/Footer';
import LogoVideo from '../../components/Atoms/LogoVideo/LogoVideo';
import SamplePictures from '../../components/Atoms/SamplePictures/SamplePictures';
import HeroText from '../../components/Atoms/HeroText/HeroText';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: url(${backgroundImage});
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: 0 40%;
  background-attachment: fixed;
  display: grid;
  grid-template-rows: 200px 200px 500px 450px 100px;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  const { roomsList } = routes;
  const { userName } = useContext(UserContext);
  if (userName) return <Redirect to={{ pathname: roomsList }}></Redirect>;

  return (
    <Wrapper>
      <TopWrapper>
        <LogoVideo />
        <UserNameForm />
      </TopWrapper>
      <HeroText />
      <ContentWrapper>
        <SamplePictures />
      </ContentWrapper>
      <ContentWrapper>
        <p></p>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
