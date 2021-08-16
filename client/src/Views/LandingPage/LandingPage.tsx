import styled from 'styled-components';

import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserNameForm from '../../components/Organisms/UserNameForm/UserNameForm';
import { UserContext } from '../../providers/userProvider';
import { routes } from '../../router/routes';
import backgroundImage from '../../assets/Images/landing-page-background.svg';
import { StyledProps } from '../../assets/styles/theme';
import Footer from '../../components/Molecules/Footer/Footer';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  background: url(${backgroundImage});
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: 0 40%;
  display: grid;
  grid-template-rows: 200px 1fr 100px;
`;

const LandingPage = () => {
  const { roomsList } = routes;
  const { userName } = useContext(UserContext);
  if (userName) return <Redirect to={{ pathname: roomsList }}></Redirect>;

  return (
    <Wrapper>
      <p></p>
      <p></p>
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
/*<UserNameForm />*/
