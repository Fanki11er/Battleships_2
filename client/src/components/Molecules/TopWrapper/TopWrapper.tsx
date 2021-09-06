import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/userProvider';
import AppLogo from '../../Atoms/AppLogo/AppLogo';
import CancelButtonWrapper from '../../Atoms/CancelButtonWrapper/CancelButtonWrapper';
import UserInfo from '../../Atoms/UserInfo/UserInfo';

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 20% 15%;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  @media screen and (max-width: 1920px) {
    grid-template-columns: 1fr 40% 25%;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 25% 30%;
  }

  @media screen and (max-width: 560px) {
    grid-template-rows: 100px 100px;
    grid-template-columns: 50% 50%;
  }
`;

const TopWrapper = () => {
  const { userName, roomName } = useContext(UserContext);
  return (
    <Wrapper>
      <AppLogo />
      <UserInfo userName={userName} roomName={roomName} />
      <CancelButtonWrapper />
    </Wrapper>
  );
};

export default TopWrapper;
