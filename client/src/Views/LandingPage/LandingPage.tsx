import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserNameForm from '../../components/Organisms/UserNameForm/UserNameForm';
import { UserContext } from '../../providers/userProvider';
import { routes } from '../../router/routes';

import Footer from '../../components/Molecules/Footer/Footer';
import LogoVideo from '../../components/Atoms/LogoVideo/LogoVideo';
import SamplePictures from '../../components/Atoms/SamplePictures/SamplePictures';
import HeroText from '../../components/Atoms/HeroText/HeroText';
import Cinematic from '../../components/Atoms/Cinematic/Cinematic';
import { ContentWrapper, TopWrapper, Wrapper } from './LandingPage.styles';

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
        <Cinematic />
      </ContentWrapper>
      <ContentWrapper>
        <UserNameForm />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
