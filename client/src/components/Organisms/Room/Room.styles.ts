import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 520px;
  height: 250px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.transparentMyBlue};
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
  margin: 25px;
  backdrop-filter: blur(5px);
  background-color: rgba(1, 13, 38, 0.2);

  @media screen and (min-width: 3000px) {
    width: 750px;
    height: 370px;
    margin: 75px;
  }

  @media screen and (max-width: 1540px) {
    width: 450px;
    height: 200px;
    margin: 30px;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    margin: 25px;
  }
`;

export const RoomName = styled.div`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps) => props.theme.colors.green};
  text-align: center;
  font-family: 'Montserrat';
  font-weight: bold;
  user-select: none;
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
  }

  @media screen and (max-width: 1540px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  }

  @media screen and (max-width: 560px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  }
`;

export const UserSlotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
