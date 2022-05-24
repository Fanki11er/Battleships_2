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
  user-select: ${(props: StyledProps & Props) => (props.isActive ? 'auto' : 'none')};
  &:hover {
    cursor: ${(props: Props) => (props.isActive ? 'pointer' : ' not-allowed')};
  }
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
    width: 200px;
    height: 55px;
  }

  @media screen and (max-width: 1540px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
    width: 120px;
    height: 35px;
  }

  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XS};
    width: 95px;
    height: 35px;
  }
`;

export const ReadyButton = styled(StandardButton)`
  /* animation-name: ${(props: Props) => (props.isActive ? 'show' : 'hide')};
  animation-duration: 2s;
  animation-fill-mode: forwards;*/

  &.shows {
    visibility: hidden;
    opacity: 0;
    animation-name: show;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    @keyframes shows {
      to {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &.hide {
    visibility: visible;
    opacity: 1;
    animation-name: hide;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    @keyframes hide {
      to {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

export const CancelButton = styled(StandardButton)`
  color: ${(props: StyledProps) => props.theme.colors.red};
  border: 3px solid ${(props: StyledProps) => props.theme.colors.red};
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props: StyledProps) => props.theme.colors.transparentRed};
  }
`;
