import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/Images/AppLogo.svg';
import { StyledProps } from '../../../assets/styles/theme';

const AppLogo = styled(Logo)`
  width: 120px;
  height: 120px;
  user-select: none;
  margin: 25px;

  @media screen and (max-width: 1540px) {
    width: 90px;
    height: 90px;
    margin: 30px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: 80px;
    height: 80px;
    margin: 30px;
  }
`;

export default AppLogo;
