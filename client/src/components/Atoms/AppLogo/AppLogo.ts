import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/Images/AppLogo.svg';

const AppLogo = styled(Logo)`
  width: 120px;
  height: 120px;
  user-select: none;
  margin: 25px;
  @media screen and (max-width: 960px) {
    width: 80px;
    height: 80px;
    margin: 30px;
  }
`;

export default AppLogo;
