import { Link } from 'react-router-dom';
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
  transition: background-color 0.5s;
  outline: none;
  &:hover,
  :focus {
    cursor: ${(props: Props) => (props.isActive ? 'pointer' : ' not-allowed')};
    background-color: ${(props: StyledProps) => props.theme.colors.transparentOrange};
  }
  user-select: none;
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
    width: 200px;
    height: 55px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
    width: 130px;
    height: 40px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
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
  color: ${(props: StyledProps & Props) => props.theme.colors.red};
  border: 3px solid ${(props: StyledProps & Props) => props.theme.colors.red};
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${(props: StyledProps & Props) => props.theme.colors.transparentRed};
  }
`;

export const CancelLink = styled(Link)`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
  background-color: transparent;
  transition: background-color 0.5s;
  user-select: none;
  display: flex;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${(props: StyledProps) => props.theme.colors.red};
  border: 3px solid ${(props: StyledProps) => props.theme.colors.red};
  outline: none;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${(props: StyledProps) => props.theme.colors.transparentRed};
  }

  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
    width: 200px;
    height: 55px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
    width: 130px;
    height: 40px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XS};
    width: 95px;
    height: 35px;
  }
`;

export const SetRandomShipsButton = styled(StandardButton)`
  color: ${(props: StyledProps & Props) => props.theme.colors.lighterBlue};
  border: 3px solid ${(props: StyledProps) => props.theme.colors.lighterBlue};
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${(props: StyledProps) => props.theme.colors.transparentLighterBlue};
  }
`;

export const ResetShipsButton = styled(StandardButton)`
  color: ${(props: StyledProps) => props.theme.colors.salmon};
  border: 3px solid ${(props: StyledProps) => props.theme.colors.salmon};
  outline: none;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${(props: StyledProps) => props.theme.colors.transparentSalmon};
  }
`;

export const PageControlButton = styled.button`
  color: ${(props: StyledProps & Props) => (props.isActive ? props.theme.colors.myBlue : props.theme.colors.inactiveGrey)};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
  border-radius: 5px;
  width: 70px;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: ${(props: Props) => (props.isActive ? 'pointer' : 'not-allowed')};
  user-select: ${(props: Props) => (props.isActive ? 'auto' : 'none')};
  outline: none;

  :hover,
  :focus {
    border: ${(props: StyledProps & Props) => (props.isActive ? `2px solid  ${props.theme.colors.myBlue}` : 'none')};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: 60px;
    height: 30px;
  }
`;

export const SmallCancelButton = styled(StandardButton)`
  color: ${(props: StyledProps & Props) => props.theme.colors.red};
  border: 2px solid ${(props: StyledProps & Props) => props.theme.colors.red};
  outline: none;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${(props: StyledProps & Props) => props.theme.colors.transparentRed};
  }

  width: 80px;
  height: 35px;
  align-self: center;
  justify-self: center;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: 60px;
    height: 25px;
  }
`;
