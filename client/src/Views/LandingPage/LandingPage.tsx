//import styled from 'styled-components';

import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserNameForm from '../../components/Organisms/UserNameForm/UserNameForm';
import { UserContext } from '../../providers/userProvider';
import { routes } from '../../router/routes';

const LandingPage = () => {
  const { roomsList } = routes;
  const { userName } = useContext(UserContext);
  if (userName) return <Redirect to={{ pathname: roomsList }}></Redirect>;

  return <UserNameForm />;
};

export default LandingPage;
