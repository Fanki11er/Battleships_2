import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type Props = {
  isActive: boolean;
};

const choseColor = (props: StyledProps & Props) => {
  const {
    theme: { colors },
    isActive,
  } = props;
  return isActive ? colors.yellow : colors.inactiveGrey;
};
export const StandardButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  border: 3px solid ${(props: StyledProps & Props) => choseColor(props)};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
  color: ${(props: StyledProps & Props) => choseColor(props)};
  background-color: transparent;
  user-select: ${(props: StyledProps & Props) => (props.isActive ? 'initial' : 'none')};
  &:hover {
    cursor: ${(props: Props) => (props.isActive ? 'pointer' : ' not-allowed')};
  }
`;

export const ReadyButton = styled(StandardButton)`
  opacity: ${(props: Props) => (props.isActive ? '1' : '0')};
  transition: opacity 0.5s 0.2s;
`;
