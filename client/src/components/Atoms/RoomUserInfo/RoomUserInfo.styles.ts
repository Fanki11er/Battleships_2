import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { UserStatus } from '../../../Types/types';
import { ReactComponent as PersonIcon } from '../../../assets/icons/icon-person.svg';
import { ReactComponent as ComputerIcon } from '../../../assets/icons/icon-computer.svg';
import { ReactComponent as QuestionMarkIcon } from '../../../assets/icons/icon-question-mark.svg';

type Props = {
  userStatus: UserStatus;
  isComputer?: boolean;
};

export const Wrapper = styled.div`
  width: 165px;
  height: 40px;
  display: flex;
  padding: 0 15px;
  border-radius: 10px;
  border: 2px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
  user-select: none;

  @media screen and (min-width: 3000px) {
    width: 270px;
    height: 70px;
    padding: 0 20px;
  }

  @media screen and (max-width: 1540px) {
    width: 35%;
    padding: 0 10px;
    height: 35px;
    border-radius: 10px;
  }

  @media screen and (max-width: 560px) {
    width: 45%;
    padding: 0 10px;
    height: 30px;
    border-radius: 5px;
  }
`;

export const UserName = styled.div`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  }

  @media screen and (min-width: 1540px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  }

  @media screen and (max-width: 560px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XS};
  }
`;

export const StyledUserStatus = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props: StyledProps & Props) =>
    props.userStatus === 'preparing' && !props.isComputer ? props.theme.colors.orange : props.theme.colors.green};
  border-radius: 50%;
  margin: 5px;

  @media screen and (min-width: 3000px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 1540px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledPersonIcon = styled(PersonIcon)`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 3000px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 1540px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledComputerIcon = styled(ComputerIcon)`
  width: 25px;
  height: 25px;
  @media screen and (min-width: 3000px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1540px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledQuestionMarkIcon = styled(QuestionMarkIcon)`
  width: 35px;
  height: 35px;
  position: fixed;
  top: 20px;
  right: 20px;
  transition: all 0.3s;
  background-color: transparent;
  border-radius: 50%;
  animation-name: bump;
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 3;
  outline: none;

  :hover,
  :focus {
    border: 3px solid ${(props: StyledProps) => props.theme.colors.orange};
  }

  @media screen and (max-width: 860px) {
    top: 10px;
    right: 5px;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
      background-color: transparent;
    }
    50% {
      transform: scale(1.5);
      background-color: orange;
    }

    100% {
      transform: scale(1);
      background-color: transparent;
    }
  }
`;
