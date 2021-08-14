import styled from 'styled-components';
import AppLogo from '../../Atoms/AppLogo/AppLogo';
import CancelButtonWrapper from '../../Atoms/CancelButtonWrapper/CancelButtonWrapper';

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;

const TopWrapper = () => (
  <Wrapper>
    <AppLogo />
    <CancelButtonWrapper />
  </Wrapper>
);

export default TopWrapper;
