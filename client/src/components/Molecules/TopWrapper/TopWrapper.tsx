import styled from 'styled-components';
import AppLogo from '../../Atoms/AppLogo/AppLogo';

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-items: flex-start;
  padding: 0 10px;
  align-items: center;
`;
const TopWrapper = () => (
  <Wrapper>
    <AppLogo />
  </Wrapper>
);

export default TopWrapper;
